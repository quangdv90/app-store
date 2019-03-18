import axios from 'axios';
import store from '../stores';
import { _signoutAction } from '../auth/Auth.action';

let API_URI;

if (process.env.NODE_ENV !== 'production') {
    API_URI = 'http://localhost:6969/api/'
} else {
    API_URI = 'http://api.appstore/v1'
}

export const Instance = axios.create({
    baseURL: `${API_URI}`,
    timeout: 10000
});

Instance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response.status === 401) {
        /**
         * Handle 401 Unauthorized here. Maybe redirect to Login via dispatch to logout action
         */
        store.dispatch(_signoutAction());
    }

    return Promise.reject(error);
});

export const setAuthToken = (token) => {
    if (token) {
        // Apply To Every Request
        Instance.defaults.headers.common['Authorization'] = token;
    } else {
        // Delete Auth Header
        delete Instance.defaults.headers.common['Authorization'];
    }
}