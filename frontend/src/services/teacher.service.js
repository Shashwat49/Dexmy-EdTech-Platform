import { api } from '../api';
import ENDPOINTS from '../api/endpoints';

const teacherService = {
    getProfile: (id) => api.get(ENDPOINTS.TEACHERS.BY_ID(id)),
    getCourses: (id) => api.get(ENDPOINTS.TEACHERS.COURSES(id)),
    getBookings: (id) => api.get(ENDPOINTS.TEACHERS.BOOKINGS(id)),
    getEarnings: (id) => api.get(ENDPOINTS.TEACHERS.EARNINGS(id)),
};

export default teacherService;
