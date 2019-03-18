import {
    REGISTER_USER,
    SIGN_IN,
    SIGN_OUT
} from './Auth.constant';
import {
    _registerUserSuccessAction,
    _registerUserFailedAction,

    _signinSuccessAction,
    _signinFailedAction
} from './Auth.action';
import { put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { Instance, setAuthToken } from '../utils/Instance';

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
        yield setAuthToken(response.data.token);
        yield put(push('/'));
    } catch (err) {
        yield put(_signinFailedAction(err.response.data));
    }
}

function* watchSignin() {
    yield takeLatest(SIGN_IN, _handleSignin);
}

// Signout User
function* watchSignout() {
    yield takeLatest(SIGN_OUT, function* _handleSignout() {
        yield setAuthToken(false);
        yield put(push('/login'));
    });
}

const sagas = [watchRegisterUser, watchSignin, watchSignout];

export default sagas;