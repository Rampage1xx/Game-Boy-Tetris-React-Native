import {Animated} from 'react-native';
import {call, put, take} from 'redux-saga/effects';
import {actionActiveBlock, actionMovingBlock, actionRenderGrid, ACTIVE_BLOCK} from '../Actions';
import {changeGridStatus} from '../CoreLogic/ChangeGridStatus';
import {newBlockInGame} from '../CoreLogic/GenerateBlocks';
import delay = Animated.delay;

function* blockMovementWorker({type}) {
    while (true) {
        yield take(ACTIVE_BLOCK);
        console.log('partito active block worker');
        yield delay(1000);
        const parameters = {horizontal: 1, vertical: 0, locked: false, downKey: false};
        const result = yield call(changeGridStatus, parameters);
        if (result.locked) {
            // new block
            yield put(actionRenderGrid(result.data.dataGridState));
            yield put(actionMovingBlock(result.data));
            yield call(newBlockInGame);
        } else {
            // keep going
            console.log('keep going');
            yield put(actionRenderGrid(result.data.dataGridState));
            yield put(actionMovingBlock(result.data));
            yield put(actionActiveBlock());
        }
    }
}

function* changeDirectionWorker({type}) {

}

function* blockRotationWorker({type}) {

}

function* blockDownWorker({type}) {

}

export function* blockMovementSaga() {
    yield delay(1000);
    const parameters = {horizontal: 0, vertical: 1, locked: true, downKey: false};
    const result = yield call(changeGridStatus, parameters);
    console.log(result.locked);
    if (result.locked) {
        // new block
        yield put(actionRenderGrid(result.data.dataGridState));
        yield put(actionMovingBlock(result.data));
        yield call(newBlockInGame);
    } else if (result.completed) {
        // keep going

        yield put(actionRenderGrid(result.data.dataGridState));
        yield put(actionMovingBlock(result.data));
        yield put(actionActiveBlock());
    }

}

