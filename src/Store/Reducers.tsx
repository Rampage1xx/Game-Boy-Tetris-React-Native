import createHistory from 'history/createMemoryHistory';
import {routerMiddleware, routerReducer} from 'react-router-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import {combineReducers} from 'redux-immutable';
import createSagaMiddleware from 'redux-saga';
import {GameLogicReducer} from '../GameLogic/GameLogicReducer';
import {sagaRoot} from './SagaRoot';

declare const window: any;
// debug for redux
const composeEnhancers: any = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const History: any = createHistory();
const sagaMiddleware = createSagaMiddleware();

const historyRouter = routerMiddleware(History);

const reducers = combineReducers({
    router: routerReducer,
    GameLogicReducer: GameLogicReducer
});

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(historyRouter, sagaMiddleware))
);
sagaMiddleware.run(sagaRoot);

