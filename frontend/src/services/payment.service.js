import { api } from '../api';
import ENDPOINTS from '../api/endpoints';

const paymentService = {
    getHistory: () => api.get(ENDPOINTS.PAYMENTS.HISTORY),
    getInvoice: (id) => api.get(ENDPOINTS.PAYMENTS.INVOICE(id)),
};

export default paymentService;
