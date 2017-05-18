import {call, takeLatest} from 'redux-saga/effects';
import {GENERATE_QUEUE} from '../Actions';
import {generateBlocksQueue} from '../CoreLogic/GenerateBlocks';

function* generateQueueWorker({blocksToMake, type}) {

    yield call(generateBlocksQueue, blocksToMake);
}

export function* generateBlockQueueSaga() {
    yield [
        takeLatest(GENERATE_QUEUE, generateQueueWorker)
    ];
}
