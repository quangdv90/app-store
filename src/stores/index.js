import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSageMiddleware from "redux-saga";
import RootReducer from '../reducers';
import RootSaga from '../sagas';

const sagaMiddleware = createSageMiddleware();

export const history = createBrowserHistory();

export const configureStore = preloadedState => {
    const middleware = [routerMiddleware(history), sagaMiddleware];

    const middlewareEnhancer = applyMiddleware(...middleware);
    const enhancers = [middlewareEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);

    const store = createStore(
        RootReducer(history),
        preloadedState,
        composedEnhancers
    );

    sagaMiddleware.run(RootSaga);

    return store;
}

/* import { createBrowserHistory } from "history";
import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import createSageMiddleware from "redux-saga";

import RootSaga from "../sagas";
import createRootReducer from "../reducers";

export const history = createBrowserHistory();

const sagaMiddleware = createSageMiddleware();

const store = createStore(
  createRootReducer(history),
  applyMiddleware(routerMiddleware(history), sagaMiddleware)
);

sagaMiddleware.run(RootSaga);

export default store; */



