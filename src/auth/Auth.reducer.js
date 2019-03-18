import {
    REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILED,
    SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAILED,
    SIGN_OUT
} from './Auth.constant';

import isEmpty from 'lodash/isEmpty';

// Initialize Auth State
const initialState = {
    register: {
        loading: false,
        success: false,
        error: null,
        message: null
    },
    signin: {
        loading: false,
        isAuthenticated: false,
        user: {},
        token: null,
        error: null
    }
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                register: {
                    loading: true,
                    success: false,
                    error: null,
                    message: null
                }
            }

        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                register: {
                    loading: false,
                    success: true,
                    error: null,
                    message: action.payload.message
                }
            }

        case REGISTER_USER_FAILED:
            return {
                ...state,
                register: {
                    loading: false,
                    success: false,
                    error: action.error,
                    message: null
                }
            }

        case SIGN_IN:
            return {
                ...state,
                signin: {
                    loading: true,
                    isAuthenticated: false,
                    user: {},
                    token: null,
                    error: null
                }
            }

        case SIGN_IN_SUCCESS:
            return {
                ...state,
                signin: {
                    loading: false,
                    isAuthenticated: !isEmpty(action.payload.user),
                    user: action.payload.user,
                    token: action.payload.token,
                    error: null
                }
            }

        case SIGN_IN_FAILED:
            return {
                ...state,
                signin: {
                    loading: false,
                    isAuthenticated: false,
                    user: {},
                    token: null,
                    error: action.error
                }
            }

        case SIGN_OUT:
            return { ...initialState };

        default:
            return state; // Incase: State not change
    }
}

export default AuthReducer;