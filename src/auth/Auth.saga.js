import {
    REGISTER_USER
} from './Auth.constant';
import {
    _registerUserSuccessAction,
    _registerUserFailedAction
} from './Auth.action';
import { success, error, removeAll } from 'react-notification-system-redux';
import { put, takeLatest } from 'redux-saga/effects';
// import { push } from 'connected-react-router';
import { Instance } from '../utils/Instance';


function* __handleRegisterUser(action) {
    const { user } = action;

    try {
        const response = yield Instance.post('/auth/register', user);
        yield put(_registerUserSuccessAction(response.data));
        yield put(removeAll());
        yield put(success({
            title: 'Greate!',
            message: response.data.message,
            position: 'tr',
            autoDismiss: 7
        }));
    } catch (err) {
        yield put(_registerUserFailedAction(err.response.data));
        yield put(removeAll());
        yield put(error({
            title: 'Opp!',
            message: err.response.data.message,
            position: 'tr',
            autoDismiss: 7
        }));
    }
}

function* watchRegisterUser() {
    yield takeLatest(REGISTER_USER, __handleRegisterUser);
}

const sagas = [watchRegisterUser];

export default sagas;