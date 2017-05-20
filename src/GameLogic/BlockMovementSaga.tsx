import {Animated} from 'react-native';
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {
    actionActiveBlock, actionDownKey, actionGameOver, actionGenerateQueue, actionMovingBlock, actionRenderGrid,
    ACTIVE_BLOCK, DOWN_KEY, GENERATE_QUEUE, HORIZONTAL_MOVEMENT, START
} from './Actions';
import {generateBlocksQueue, newBlockInGame, rotateBlock} from './CoreLogic/GenerateBlocks';
import {changeGridStatus} from './CoreLogic/GridLogic';
import {makeDataGrid} from './CoreLogic/MakeDataGrid';
import delay = Animated.delay;

function* rotateBlockWorker({type, blockRotation}) {
    const rotatedBlock: number[][] = yield call(rotateBlock, blockRotation);
    const parameters = {horizontal: 0, vertical: 0, locked: false, downKey: false, rotatedBlock};
    const result = yield call(changeGridStatus, parameters);
    if (!result.discard) {
        //renders and caches the result
        yield put(actionRenderGrid(result.data.dataGridState));
        yield put(actionMovingBlock(result.data));
    }
}

function* horizontalMovementWorker({type, direction}) {
    const parameters = {horizontal: direction, vertical: 0, locked: false, downKey: false};
    const result = yield call(changeGridStatus, parameters);
    // renders the movement
    yield put(actionRenderGrid(result.data.dataGridState));
    // caches the result
    yield put(actionMovingBlock(result.data));
}

function* startGameWorker() {
    // generate queue
    yield put(actionGenerateQueue(4));
    // generate grid
    yield call(makeDataGrid);
    // resets game status
    yield put(actionGameOver(false));
    // puts the first block in  the game
    yield call(newBlockInGame);
}

function* generateQueueWorker({blocksToMake, type}) {

    yield call(generateBlocksQueue, blocksToMake);
}

function* delayBlockMovementWorker({type, down}) {
    if (!down) {
        yield delay(1000);
    }
    yield put(actionActiveBlock());
}

export function* blockMovementWorker() {

    const parameters = {horizontal: 0, vertical: 1, locked: true, downKey: false};
    const result = yield call(changeGridStatus, parameters);

    if (result.locked) {
        // new block
        // sends the data to the view layer for rendering
        yield put(actionRenderGrid(result.data.dataGridState));
        // caches the locked block data
        yield put(actionMovingBlock(result.data));
        // puts a new block in game
        yield call(newBlockInGame);
    } else if (result.completed) {
        // keeps going
        // sends the data to the view layer for rendering
        yield put(actionRenderGrid(result.data.dataGridState));
        // caches the data into the store for the next computation
        yield put(actionMovingBlock(result.data));
        // starts the new cycle
        yield put(actionDownKey(false));
    } else if (result.gameOver) {
        yield put(actionGameOver(true));
    }

}

export function* blockMovementSaga() {

    yield [
        takeLatest(START, startGameWorker),
        takeLatest(DOWN_KEY, delayBlockMovementWorker),
        takeEvery(ACTIVE_BLOCK, blockMovementWorker),
        takeLatest(GENERATE_QUEUE, generateQueueWorker),
        takeLatest(HORIZONTAL_MOVEMENT, horizontalMovementWorker)
    ];
}
