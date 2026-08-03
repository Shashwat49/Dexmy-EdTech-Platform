import { Routes, Route } from 'react-router-dom';

import PublicLayout from '../layouts/PublicLayout';
import StudentLayout from '../layouts/StudentLayout';
import TeacherLayout from '../layouts/TeacherLayout';
import AdminLayout from '../layouts/AdminLayout';

import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';

const AppRoutes = ({ isAuthenticated, userRole }) => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route element={<PublicRoute isAuthenticated={isAuthenticated} userRole={userRole} />}>
                <Route element={<PublicLayout />}>
                    <Route path="/" element={<div>Home Page</div>} />
                    <Route path="/login" element={<div>Login Page</div>} />
                    <Route path="/register" element={<div>Register Page</div>} />
                </Route>
            </Route>

            {/* Student Routes */}
            <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} allowedRoles={['student']} userRole={userRole} />}>
                <Route element={<StudentLayout />}>
                    <Route path="/student" element={<div>Student Dashboard</div>} />
                    <Route path="/student/courses" element={<div>Student Courses</div>} />
                    <Route path="/classroom/:id" element={<div>Classroom</div>} />
                    <Route path="/sessions" element={<div>Sessions</div>} />
                    <Route path="/purchases" element={<div>Purchases</div>} />
                </Route>
            </Route>

            {/* Teacher Routes */}
            <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} allowedRoles={['teacher']} userRole={userRole} />}>
                <Route element={<TeacherLayout />}>
                    <Route path="/teacher" element={<div>Teacher Dashboard</div>} />
                    <Route path="/teacher/courses" element={<div>Teacher Courses</div>} />
                    <Route path="/teacher/sessions" element={<div>Teacher Sessions</div>} />
                </Route>
            </Route>

            {/* Admin Routes */}
            <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} allowedRoles={['admin']} userRole={userRole} />}>
                <Route element={<AdminLayout />}>
                    <Route path="/admin" element={<div>Admin Dashboard</div>} />
                    <Route path="/admin/users" element={<div>Admin Users</div>} />
                    <Route path="/admin/courses" element={<div>Admin Courses</div>} />
                </Route>
            </Route>

            {/* Fallback */}
            <Route path="/unauthorized" element={<div>Unauthorized</div>} />
            <Route path="*" element={<div>404 - Not Found</div>} />
        </Routes>
    );
};

export default AppRoutes;
