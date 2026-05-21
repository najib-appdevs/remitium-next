import api from '@/lib/axios/instance';

export const authService = {
    login: (data) => api.post('/auth/login', data),
    register: (data) => api.post('/auth/register', data),
};

export const userService = {
    getProfile: () => api.get('/user/profile'),
    updateProfile: (data) => api.put('/user/profile', data),
};

// Add new API here if needed