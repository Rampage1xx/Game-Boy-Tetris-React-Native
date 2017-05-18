import {call, put, takeLatest} from 'redux-saga/effects';
import {actionGenerateQueue, START} from '../Actions';
import {newBlockInGame} from '../CoreLogic/GenerateBlocks';
import {makeDataGrid} from '../CoreLogic/Grid';

function* startGameWorker() {
    // generate queue
    yield put(actionGenerateQueue(4));
    // generate grid
    const grid = yield call(makeDataGrid);

    yield call(newBlockInGame);
}

export function* startGameSaga() {

    yield takeLatest(START, startGameWorker);

}
