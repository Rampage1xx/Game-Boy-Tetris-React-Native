import {takeLatest} from 'redux-saga/effects';

function* changeDirectionWorker({type}) {

}

function* blockRotationWorker ({type}) {

}

function* blockDownWorker ({type}){

}

export function* blockMovementSaga() {
    yield [
        takeLatest('BLOCK_DIRECTION', changeDirectionWorker),
        takeLatest('BLOCK_ROTATION', blockRotationWorker),
        takeLatest('BLOCK_DOWN', blockDownWorker)
    ];
}
