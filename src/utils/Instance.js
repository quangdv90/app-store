import axios from 'axios';

const API_URI = 'http://localhost:6969/api/';

export const Instance = axios.create({
    baseURL: `${API_URI}`,
    timeout: 10000
});

Instance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response.status === 401) {
        console.log('Handle 401 Unauthorized here. Maybe redirect to Login via dispatch to logout action');
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