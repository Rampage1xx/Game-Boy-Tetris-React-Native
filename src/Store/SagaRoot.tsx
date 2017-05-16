import {Task} from 'redux-saga';
import {cancel, fork, take} from 'redux-saga/effects';
import {START, TURN_OFF} from '../GameLogic/Actions';
import {blockMovement} from '../GameLogic/GameLogicSaga';

export function* sagaRoot() {

    while (yield take(START)) {
        const delegate: Task[] = yield [
            fork(blockMovement)
        ];
        yield take(TURN_OFF);
        yield delegate.map(watcher => cancel(watcher));
    }
}
