import {actionMovingBlock, actionNextBlock, actionRenderGrid, MOVING_BLOCK} from './Actions';
import {call, put, takeLatest} from 'redux-saga/effects';
import {changeGridStatus} from './Grid';

export function* blockMovementWorker({block, dataGridState, blockPositionVertical, blockPositionHorizontal, type}) {

    const error = 'Block Movement Worker should receive an object containing completed or locked';
    const parameters: IChangeGridStatusParameters = {
        blockPositionVertical,
        dataGridState,
        blockPositionHorizontal,
        block
    };
    const moveResult: IChangeGridStatusResult = yield call(changeGridStatus, parameters);
    if (moveResult.completed) {

        yield put(actionRenderGrid(moveResult.data.dataGridState));
        yield put(actionMovingBlock(moveResult.data));

    } else if (moveResult.locked) {

        yield put(actionRenderGrid(moveResult.data.dataGridState));
        yield put(actionNextBlock());

    } else {

        throw error;

    }
}

export function* blockMovement() {
    yield takeLatest(MOVING_BLOCK, blockMovementWorker);
}
