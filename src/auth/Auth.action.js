import {
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILED,

    SIGN_IN,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILED,

    SIGN_OUT
} from './Auth.constant';

// Register User
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
export const _registerUserFailedAction = (error) => {
    return {
        type: REGISTER_USER_FAILED,
        error
    }
}

// Signin User
export const _signinAction = (user) => {
    return {
        type: SIGN_IN,
        user
    }
}
export const _signinSuccessAction = (payload) => {
    return {
        type: SIGN_IN_SUCCESS,
        payload
    }
}
export const _signinFailedAction = (error) => {
    return {
        type: SIGN_IN_FAILED,
        error
    }
}

// Signout User
export const _signoutAction = () => {
    return {
        type: SIGN_OUT
    }
}