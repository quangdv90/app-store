/* import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";
import RootReducer from '../reducers';
import RootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

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
} */

import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { loggerMiddleware } from '../auth/Auth.middleware';

import RootSaga from "../sagas";
import createRootReducer from "../reducers";

// Redux persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { createFilter } from 'redux-persist-transform-filter';

// Redux persist config
const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['auth'],
  stateReconciler: autoMergeLevel2,
  transforms: [
    createFilter('auth', 'signin')
  ]
}

export const history = createBrowserHistory();

const persistedReducer = persistReducer(persistConfig, createRootReducer(history));

const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const middleware = [routerMiddleware(history), sagaMiddleware, loggerMiddleware];
const middlewareEnhancer = applyMiddleware(...middleware);
const enhancers = [middlewareEnhancer];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(...enhancers);

const store = createStore(
  persistedReducer,
  initialState,
  composedEnhancers
);

// Run sagas
sagaMiddleware.run(RootSaga);

export default store;
export const persistor = persistStore(store);



