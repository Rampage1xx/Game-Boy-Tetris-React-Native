import {Task} from 'redux-saga';
import {cancel, fork, take} from 'redux-saga/effects';
import {TURN_OFF} from '../GameLogic/Actions';
import {blockDrop} from '../GameLogic/Saga/BlockDropSaga';
import {generateBlockQueue} from '../GameLogic/Saga/GenerateBlockQueueSaga';
import {blockMovementSaga} from '../GameLogic/Saga/BlockMovementSaga';

export function* sagaRoot() {
    //  while (yield take(START)) {
    const delegate: Task[] = yield [
        fork(blockDrop),
        fork(generateBlockQueue),
        fork(blockMovementSaga)
    ];
    yield take(TURN_OFF);
    // implicit pass watcher TODO: VERFICARE SE CAUSA PROBLEMI
    yield delegate.map(watcher => cancel);
    //  }
}
