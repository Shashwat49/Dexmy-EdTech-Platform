import { api } from '../api';
import ENDPOINTS from '../api/endpoints';

const studentService = {
    getProfile: (id) => api.get(ENDPOINTS.STUDENTS.BY_ID(id)),
    getCourses: (id) => api.get(ENDPOINTS.STUDENTS.COURSES(id)),
    getSessions: (id) => api.get(ENDPOINTS.STUDENTS.SESSIONS(id)),
    getProgress: (id) => api.get(ENDPOINTS.STUDENTS.PROGRESS(id)),
};

export default studentService;
