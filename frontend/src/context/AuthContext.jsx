import { createContext, useContext, useState } from 'react';
import { api } from '../api';
import ENDPOINTS from '../api/endpoints';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);

    const login = async (credentials) => {
        setLoading(true);
        try {
            const { data } = await api.post(ENDPOINTS.AUTH.LOGIN, credentials);
            localStorage.setItem('token', data.token);
            setUser(data.user);
            setIsAuthenticated(true);
            return data;
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        setIsAuthenticated(false);
    };

    const register = async (payload) => {
        setLoading(true);
        try {
            const { data } = await api.post(ENDPOINTS.AUTH.REGISTER, payload);
            return data;
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, loading, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuthContext must be used within AuthProvider');
    return ctx;
};

export default AuthContext;
