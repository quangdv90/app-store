import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import store, { history, persistor } from './stores';

import "bootstrap/dist/css/bootstrap.min.css";

import * as serviceWorker from './serviceWorker';

const Loading = () => (
    <div>Loading...</div>
)

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
