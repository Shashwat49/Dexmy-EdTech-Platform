import { api } from '../api';
import ENDPOINTS from '../api/endpoints';

const sessionService = {
    getAll: () => api.get(ENDPOINTS.SESSIONS.BASE),
    getById: (id) => api.get(ENDPOINTS.SESSIONS.BY_ID(id)),
    book: (payload) => api.post(ENDPOINTS.SESSIONS.BOOK, payload),
    getUpcoming: () => api.get(ENDPOINTS.SESSIONS.UPCOMING),
};

export default sessionService;
