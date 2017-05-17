import {
    actionLeftKey, actionMovingBlock, actionNextBlock, actionRenderGrid, actionStaticBlocks,
    MOVING_BLOCK
} from '../Actions';
import {call, put, takeLatest} from 'redux-saga/effects';
import {changeGridStatus} from '../Utils/MovingBlockLogic';

export function* blockMovementWorker(parameter: IBlockMovementWorker) {
    const {block, dataGridState, blockPositionVertical, blockPositionHorizontal, type, lockedBlocks} = parameter
    try {
        const error = 'Block Movement Worker should receive an object containing completed or locked';
        const parameters: IChangeGridStatusParameters = {
            blockPositionVertical,
            dataGridState,
            blockPositionHorizontal,
            block,
            lockedBlocks
        };
        const moveResult: IChangeGridStatusResult = yield call(changeGridStatus, parameters);

        if (moveResult.completed) {

            yield put(actionRenderGrid(moveResult.data.dataGridState));
            yield put(actionMovingBlock(moveResult.data));

        } else if (moveResult.locked) {

            yield put(actionRenderGrid(moveResult.data.dataGridState));
            yield put(actionStaticBlocks(moveResult.data.dataGridState));
            yield put(actionNextBlock());

        } else {

            throw error;

        }
    } catch (error) {
        throw {error, message: 'block movement worker error'};
    }
}

export function* blockMovement() {
    yield takeLatest(MOVING_BLOCK, blockMovementWorker);
}
