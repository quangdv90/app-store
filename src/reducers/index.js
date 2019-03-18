import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import { reducer as formReducer } from "redux-form";
import AuthReducer from '../auth/Auth.reducer';


// const authPersistConfig = {
//     key: 'auth',
//     storage: storage,
//     blacklist: ['register']
// }

const RootReducer = history =>
    combineReducers({
        router: connectRouter(history),
        form: formReducer,
        auth: AuthReducer
    });

export default RootReducer;
