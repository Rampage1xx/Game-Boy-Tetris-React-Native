import {Animated} from 'react-native';
import {call, take, takeLatest} from 'redux-saga/effects';
import {changeGridStatusTry} from '../CoreLogic/BlockMovement';
import delay = Animated.delay;

function* blockMovementWorker() {
    while (true) {
        yield take('BLOCK_ACTIVE');
        yield delay(1000);
        const result = yield call(changeGridStatusTry({horizontal: 1, vertical: 0, locked: false, downKey: false}));
        if(result.locked){
            // new block

        }else{
            // keep going
        }
    }
}

function* changeDirectionWorker({type}) {

}

function* blockRotationWorker({type}) {

}

function* blockDownWorker({type}) {

}

export function* blockMovementSaga() {
    yield [
        takeLatest('BLOCK_DIRECTION', changeDirectionWorker),
        takeLatest('BLOCK_ROTATION', blockRotationWorker),
        takeLatest('BLOCK_DOWN', blockDownWorker),
        takeLatest('*', blockMovementWorker)
    ];
}
