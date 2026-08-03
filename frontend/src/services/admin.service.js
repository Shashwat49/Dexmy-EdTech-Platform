import { api } from '../api';
import ENDPOINTS from '../api/endpoints';

const adminService = {
    getAllUsers: () => api.get(ENDPOINTS.USERS.BASE),
    getUserById: (id) => api.get(ENDPOINTS.USERS.BY_ID(id)),
    deleteUser: (id) => api.delete(ENDPOINTS.USERS.BY_ID(id)),
    getAnalytics: () => api.get(ENDPOINTS.ADMIN.ANALYTICS),
    getReports: () => api.get(ENDPOINTS.ADMIN.REPORTS),
};

export default adminService;
