import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = ({ isAuthenticated, userRole }) => {
    if (isAuthenticated) {
        const redirectMap = {
            admin: '/admin',
            teacher: '/teacher',
            student: '/student',
        };
        return <Navigate to={redirectMap[userRole] || '/'} replace />;
    }

    return <Outlet />;
};

export default PublicRoute;
