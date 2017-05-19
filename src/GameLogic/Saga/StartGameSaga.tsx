import {call, put, takeLatest} from 'redux-saga/effects';
import {actionGenerateQueue, START} from '../Actions';
import {newBlockInGame} from '../CoreLogic/GenerateBlocks';
import {makeDataGrid} from '../CoreLogic/MakeDataGrid';

function* startGameWorker() {
    // generate queue
    yield put(actionGenerateQueue(4));

    // generate grid
    yield call(makeDataGrid);
    // put the block in game
    yield call(newBlockInGame);
}

export function* startGameSaga() {

    yield takeLatest(START, startGameWorker);

}
