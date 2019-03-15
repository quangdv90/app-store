import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as formReducer } from "redux-form";
import AuthReducer from '../auth/Auth.reducer';

const RootReducer = history =>
    combineReducers({
        router: connectRouter(history),
        form: formReducer,
        auth: AuthReducer
    });

export default RootReducer;
