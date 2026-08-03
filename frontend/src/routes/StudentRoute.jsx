import { Navigate, Outlet } from 'react-router-dom';
import { ROLES } from '../constants/roles';

const StudentRoute = ({ isAuthenticated, userRole }) => {
    if (!isAuthenticated) return <Navigate to="/login" replace />;
    if (userRole !== ROLES.STUDENT) return <Navigate to="/unauthorized" replace />;
    return <Outlet />;
};

export default StudentRoute;
