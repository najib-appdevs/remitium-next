import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || '',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request Interceptor (To add bearer token)
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor (handle error)
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) { // need to adjust `error.response?.status` based on the real API response
            console.error('Unauthorized!');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;