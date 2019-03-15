import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as formReducer } from "redux-form";
import { reducer as notifications } from 'react-notification-system-redux';
import AuthReducer from '../auth/Auth.reducer';

const RootReducer = history =>
    combineReducers({
        router: connectRouter(history),
        form: formReducer,
        auth: AuthReducer,
        notifications
    });

export default RootReducer;
