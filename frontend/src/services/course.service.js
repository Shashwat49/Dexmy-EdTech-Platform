import { api } from '../api';
import ENDPOINTS from '../api/endpoints';

const courseService = {
    getAll: () => api.get(ENDPOINTS.COURSES.BASE),
    getById: (id) => api.get(ENDPOINTS.COURSES.BY_ID(id)),
    create: (payload) => api.post(ENDPOINTS.COURSES.BASE, payload),
    update: (id, payload) => api.put(ENDPOINTS.COURSES.BY_ID(id), payload),
    remove: (id) => api.delete(ENDPOINTS.COURSES.BY_ID(id)),
};

export default courseService;
