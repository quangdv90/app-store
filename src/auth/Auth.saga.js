import {
    REGISTER_USER,
    SIGN_IN
} from './Auth.constant';
import {
    _registerUserSuccessAction,
    _registerUserFailedAction,

    _signinSuccessAction,
    _signinFailedAction
} from './Auth.action';
import { put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { Instance } from '../utils/Instance';

// Register User
function* __handleRegisterUser(action) {
    const { user } = action;

    try {
        const response = yield Instance.post('/auth/register', user);
        yield put(_registerUserSuccessAction(response.data));
    } catch (err) {
        yield put(_registerUserFailedAction(err.response.data));
    }
}

function* watchRegisterUser() {
    yield takeLatest(REGISTER_USER, __handleRegisterUser);
}

// Signin User
function* _handleSignin(action) {
    const { user } = action;

    try {
        const response = yield Instance.post('/auth/login', user);
        yield put(_signinSuccessAction(response.data));
        yield put(push('/'));
    } catch (err) {
        yield put(_signinFailedAction(err.response.data));
    }
}

function* watchSignin() {
    yield takeLatest(SIGN_IN, _handleSignin);
}

const sagas = [watchRegisterUser, watchSignin];

export default sagas;