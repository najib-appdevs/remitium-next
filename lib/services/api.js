import api from '@/lib/axios/instance';

// Login API by POST method
export const authService = {
    login: (email, password) => {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        return api.post('/login', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },

    // Register API by POST method
    register: (first_name, last_name, email, password, policy) => {
        const formData = new FormData();
        formData.append('first_name', first_name);
        formData.append('last_name', last_name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('policy', policy ? 'on' : '');

        return api.post('/register', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    },

    // Logout API by POST method
    logout: () => {
        return api.post('/user/logout');
    },

    // Find User API by POST method (for forgot password)
    findUser: (credentials) => {
        const formData = new FormData();
        formData.append('credentials', credentials);

        return api.post('/password/forgot/find/user', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },

    // Verify Code API by POST method (for forgot password)
    verifyCode: (token, code) => {
        const formData = new FormData();
        formData.append('token', token);
        formData.append('code', code);

        return api.post('/password/forgot/verify/code', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },

    // Reset Password API by POST method (for forgot password)
    resetPassword: (token, password, password_confirmation) => {
        const formData = new FormData();
        formData.append('token', token);
        formData.append('password', password);
        formData.append('password_confirmation', password_confirmation);

        return api.post('/password/forgot/reset', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },

    // resend code API by GET method (for forgot password)
    resendCode: (token) => {
        return api.get(`/password/forgot/resend/code?token=${token}`);
    },
};


export const profileService = {
  getProfile: () => api.get('/user/profile/info'),
  
  updateProfile: (formData) => api.post('/user/profile/info/update', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),

  updatePassword: (formData) => api.post('/user/profile/password/update', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),

  deleteProfile: () => api.post('/user/profile/delete-profile'),
};