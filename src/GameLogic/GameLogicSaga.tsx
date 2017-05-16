import {MOVING_BLOCK} from './Actions';
import {call, takeLatest} from 'redux-saga/effects';
import {changeGridStatus} from './Grid';


export function* blockMovementWorker({block, grid, position, blockPositionHorizontal, type}) {
    const parameters: IChangeGridStatusParameters = {
        blockPositionVertical: position,
        dataGridState: grid,
        blockPositionHorizontal,
        blockMasterArray: block
    };

    yield call(changeGridStatus, parameters);

}

export function* blockMovement() {
    yield takeLatest(MOVING_BLOCK, blockMovementWorker);

}
