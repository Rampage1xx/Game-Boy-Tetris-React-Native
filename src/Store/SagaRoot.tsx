import {Task} from 'redux-saga';
import {cancel, fork, take} from 'redux-saga/effects';
import {START, TURN_OFF} from '../GameLogic/Actions';
import {blockMovementSaga} from '../GameLogic/Saga/BlockMovementSaga';
import {startGameSaga} from '../GameLogic/Saga/StartGameSaga';

export function* sagaRoot() {
    while (yield take(START)) {
        const delegate: Task[] = yield [
            fork(startGameSaga),
            fork(blockMovementSaga)
        ];

        yield take(TURN_OFF);
        yield delegate.map(watcher => cancel);
    }
}
