import {Task} from 'redux-saga';
import {cancel, fork, take, takeEvery} from 'redux-saga/effects';
import {ACTIVE_BLOCK, ON, TURN_OFF} from '../GameLogic/Actions';
import {blockMovementSaga} from '../GameLogic/Saga/BlockMovementSaga';
import {generateBlockQueueSaga} from '../GameLogic/Saga/GenerateBlockQueueSaga';
import {startGameSaga} from '../GameLogic/Saga/StartGameSaga';

export function* sagaRoot() {
    while (yield take(ON)) {
        const delegate: Task[] = yield [
            fork(startGameSaga),
            takeEvery(ACTIVE_BLOCK, blockMovementSaga),
            fork(generateBlockQueueSaga)
        ];

        yield take(TURN_OFF);

        yield delegate.map(watcher => cancel);
    }
}
