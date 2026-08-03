import { useState, useCallback } from 'react';
import { api } from '../api';

const useApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (method, url, data = null, config = {}) => {
        setLoading(true);
        setError(null);
        try {
            const response = await api({ method, url, data, ...config });
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    return { loading, error, request };
};

export default useApi;
