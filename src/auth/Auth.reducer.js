import {
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILED
} from './Auth.constant';

const initialState = {
    register: {
        loading: false,
        success: false,
        errors: null,
        messages: null
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

        default:
            return state;
    }
}

export default AuthReducer;