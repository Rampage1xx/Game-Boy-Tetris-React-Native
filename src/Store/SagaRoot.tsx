import {Task} from 'redux-saga';
import {cancel, fork, take} from 'redux-saga/effects';
import {ON, TURN_OFF} from '../GameLogic/Actions';
import {blockMovementSaga} from '../GameLogic/BlockMovementSaga';

export function* sagaRoot() {
    while (yield take(ON)) {
        const delegate: Task[] = yield [
            fork(blockMovementSaga)
        ];

        yield take(TURN_OFF);

        yield delegate.map(watcher => cancel);
    }
}
