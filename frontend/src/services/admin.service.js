import { api } from '../api';
import ENDPOINTS from '../api/endpoints';

const adminService = {
    // Users
    getAllUsers: () => api.get(ENDPOINTS.ADMIN.USERS),
    getUserById: (id) => api.get(ENDPOINTS.ADMIN.USER_BY_ID(id)),
    deleteUser: (id) => api.delete(ENDPOINTS.ADMIN.USER_BY_ID(id)),
    updateUser: (id, data) => api.put(ENDPOINTS.ADMIN.USER_BY_ID(id), data),
    createUser: (data) => api.post(ENDPOINTS.ADMIN.USERS, data),

    // Teachers
    getAllTeachers: () => api.get(ENDPOINTS.ADMIN.TEACHERS),
    getTeacherById: (id) => api.get(ENDPOINTS.ADMIN.TEACHER_BY_ID(id)),
    suspendTeacher: (id) => api.patch(ENDPOINTS.ADMIN.TEACHER_BY_ID(id), { status: 'suspended' }),

    // Students
    getAllStudents: () => api.get(ENDPOINTS.ADMIN.STUDENTS),
    getStudentById: (id) => api.get(ENDPOINTS.ADMIN.STUDENT_BY_ID(id)),

    // Sessions
    getAllSessions: () => api.get(ENDPOINTS.ADMIN.SESSIONS),
    getSessionById: (id) => api.get(ENDPOINTS.ADMIN.SESSION_BY_ID(id)),
    cancelSession: (id) => api.delete(ENDPOINTS.ADMIN.SESSION_BY_ID(id)),

    // Analytics & Settings
    getAnalytics: () => api.get(ENDPOINTS.ADMIN.ANALYTICS),
    getReports: () => api.get(ENDPOINTS.ADMIN.REPORTS),
    getSettings: () => api.get(ENDPOINTS.ADMIN.SETTINGS),
    updateSettings: (data) => api.put(ENDPOINTS.ADMIN.SETTINGS, data),
};

export default adminService;
