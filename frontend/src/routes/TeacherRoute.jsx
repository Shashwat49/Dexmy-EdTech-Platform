import { Navigate, Outlet } from 'react-router-dom';
import { ROLES } from '../constants/roles';

const TeacherRoute = ({ isAuthenticated, userRole }) => {
    if (!isAuthenticated) return <Navigate to="/login" replace />;
    if (userRole !== ROLES.TEACHER) return <Navigate to="/unauthorized" replace />;
    return <Outlet />;
};

export default TeacherRoute;
