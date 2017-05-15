import {Task} from 'redux-saga';
import {fork} from 'redux-saga/effects';

export function* sagaRoot() {
    const delegateTask: Task[] = [
        fork
    ];
}
