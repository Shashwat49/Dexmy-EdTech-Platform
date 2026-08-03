import { api } from '../api';
import ENDPOINTS from '../api/endpoints';

const classroomService = {
    join: (id) => api.post(ENDPOINTS.CLASSROOM.JOIN(id)),
    leave: (id) => api.post(ENDPOINTS.CLASSROOM.LEAVE(id)),
};

export default classroomService;
