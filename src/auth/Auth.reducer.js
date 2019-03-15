import {
    REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILED,
    SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAILED,
    LOGOUT
} from './Auth.constant';

const initialState = {
    register: {
        loading: false,
        success: false,
        errors: null,
        messages: null
    },
    signin: {
        loading: false,
        isAuthenticated: false,
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
                    errors: null,
                    messages: null
                }
            }

        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                register: {
                    loading: false,
                    success: true,
                    errors: null,
                    messages: action.payload.message
                }
            }

        case REGISTER_USER_FAILED:
            return {
                ...state,
                register: {
                    loading: false,
                    success: false,
                    errors: action.errors.message,
                    messages: null
                }
            }

        case SIGN_IN:
            return {
                ...state,
                signin: {
                    loading: true,
                    isAuthenticated: false,
                    token: null,
                    error: null
                }
            }

        case SIGN_IN_SUCCESS:
            return {
                ...state,
                signin: {
                    loading: false,
                    isAuthenticated: true,
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
                    token: null,
                    error: action.error
                }
            }

        case LOGOUT:
            return initialState;

        default:
            return state; // Incase: State not change
    }
}

export default AuthReducer;