import { api } from '../api';
import ENDPOINTS from '../api/endpoints';

const authService = {
    login: (credentials) => api.post(ENDPOINTS.AUTH.LOGIN, credentials),
    register: (payload) => api.post(ENDPOINTS.AUTH.REGISTER, payload),
    logout: () => api.post(ENDPOINTS.AUTH.LOGOUT),
    forgotPassword: (email) => api.post(ENDPOINTS.AUTH.FORGOT_PASSWORD, { email }),
    resetPassword: (payload) => api.post(ENDPOINTS.AUTH.RESET_PASSWORD, payload),
    verifyEmail: (token) => api.post(ENDPOINTS.AUTH.VERIFY_EMAIL, { token }),
    getMe: () => api.get(ENDPOINTS.AUTH.ME),
};

export default authService;
