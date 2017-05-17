import createHistory from 'history/createMemoryHistory';
import {applyMiddleware, compose, createStore} from 'redux';
import {combineReducers} from 'redux-immutable';
import createSagaMiddleware from 'redux-saga';
import {routerMiddleware, routerReducer} from 'react-router-redux';
import {sagaRoot} from './SagaRoot';
import {GameLogicStore} from '../GameLogic/GameLogicStore';

declare const window: any;
// debug for redux
const composeEnhancers: any = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const History: any = createHistory();
const sagaMiddleware = createSagaMiddleware();

const historyRouter = routerMiddleware(History);

const reducers = combineReducers({
    router: routerReducer,
    GameLogicReducer: GameLogicStore
});

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(historyRouter, sagaMiddleware))
);
sagaMiddleware.run(sagaRoot);

