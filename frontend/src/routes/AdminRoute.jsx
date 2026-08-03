import { Navigate, Outlet } from 'react-router-dom';
import { ROLES } from '../constants/roles';

const AdminRoute = ({ isAuthenticated, userRole }) => {
    if (!isAuthenticated) return <Navigate to="/login" replace />;
    if (userRole !== ROLES.ADMIN) return <Navigate to="/unauthorized" replace />;
    return <Outlet />;
};

export default AdminRoute;
