import {
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILED
} from './Auth.constant';

export const _registerUserAction = (user) => {
    return {
        type: REGISTER_USER,
        user
    }
}

export const _registerUserSuccessAction = (payload) => {
    return {
        type: REGISTER_USER_SUCCESS,
        payload
    }
}

export const _registerUserFailedAction = (errors) => {
    return {
        type: REGISTER_USER_FAILED,
        errors
    }
}