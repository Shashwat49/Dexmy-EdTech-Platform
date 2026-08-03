import { api } from '../api';
import ENDPOINTS from '../api/endpoints';

const bookingService = {
    getAll: () => api.get(ENDPOINTS.BOOKINGS.BASE),
    getById: (id) => api.get(ENDPOINTS.BOOKINGS.BY_ID(id)),
    create: (payload) => api.post(ENDPOINTS.BOOKINGS.BASE, payload),
    cancel: (id) => api.delete(ENDPOINTS.BOOKINGS.BY_ID(id)),
};

export default bookingService;
