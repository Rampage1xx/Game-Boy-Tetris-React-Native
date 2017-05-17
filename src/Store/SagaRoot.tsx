import {Task} from 'redux-saga';
import {cancel, fork, take} from 'redux-saga/effects';
import {TURN_OFF} from '../GameLogic/Actions';
import {blockMovement} from '../GameLogic/BlockMovementSaga';
import {generateBlockQueue} from '../GameLogic/GenerateBlockQueueSaga';

export function* sagaRoot() {
    //  while (yield take(START)) {
    const delegate: Task[] = yield [
        fork(blockMovement),
        fork(generateBlockQueue)
    ];
    yield take(TURN_OFF);
    // implicit pass watcher TODO: VERFICARE SE CAUSA PROBLEMI
    yield delegate.map(watcher => cancel);
    //  }
}
