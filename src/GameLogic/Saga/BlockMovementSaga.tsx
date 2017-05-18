import {Animated} from 'react-native';
import {call, put, take, takeLatest} from 'redux-saga/effects';
import {actionActiveBlock, actionRenderGrid, ACTIVE_BLOCK, START} from '../Actions';
import {changeGridStatus} from '../CoreLogic/BlockMovement';
import {newBlockInGame} from '../CoreLogic/GenerateBlocks';
import delay = Animated.delay;

function* blockMovementWorker({type}) {
    while (true) {
        yield take(ACTIVE_BLOCK);

        yield delay(1000);
        const parameters = {horizontal: 1, vertical: 0, locked: false, downKey: false};
        const result = yield call(changeGridStatus, parameters);
        if (result.locked) {
            // new block
            yield put(actionRenderGrid(result.data.dataGridState));
            yield call(newBlockInGame);
        } else {
            // keep going
            yield put(actionRenderGrid(result.data.dataGridState));
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
    yield takeLatest(START, blockMovementWorker);

}
/*      takeLatest('BLOCK_DIRECTION', changeDirectionWorker),
 takeLatest('BLOCK_ROTATION', blockRotationWorker),
 takeLatest('BLOCK_DOWN', blockDownWorker),*/
