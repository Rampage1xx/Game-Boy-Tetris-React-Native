import {put, takeLatest} from 'redux-saga/effects';
import {actionUpdateQueue, GENERATE_QUEUE} from '../Actions';
import {generateBlocksQueue} from '../CoreLogic/Grid';

function* generateQueueWorker({blocksToMake, type}) {
    const blocksToAdd: any[] = [];
    for (let i = 0; i < blocksToMake; i++) {
        blocksToAdd.push(generateBlocksQueue());
    }
    yield put(actionUpdateQueue(blocksToAdd));
}

export function* generateBlockQueue() {
    takeLatest(GENERATE_QUEUE, generateQueueWorker);
}
