import { Routes, Route } from 'react-router-dom';

import PublicLayout from '../layouts/PublicLayout';
import StudentLayout from '../layouts/StudentLayout';
import TeacherLayout from '../layouts/TeacherLayout';
import AdminLayout from '../layouts/AdminLayout';
import ClassroomLayout from '../layouts/ClassroomLayout';

import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';

// Admin pages
import AdminDashboard from '../pages/admin/Dashboard';
import AdminUsers from '../pages/admin/Users';
import AdminTeachers from '../pages/admin/Teachers';
import AdminStudents from '../pages/admin/Students';
import AdminCourses from '../pages/admin/Courses';
import AdminSessions from '../pages/admin/Sessions';
import AdminBookings from '../pages/admin/Bookings';
import AdminPayments from '../pages/admin/Payments';
import AdminAnalytics from '../pages/admin/Analytics';
import AdminSettings from '../pages/admin/Settings';

// Classroom
import Classroom from '../pages/classroom/Classroom';

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
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/admin/users" element={<AdminUsers />} />
                    <Route path="/admin/teachers" element={<AdminTeachers />} />
                    <Route path="/admin/students" element={<AdminStudents />} />
                    <Route path="/admin/courses" element={<AdminCourses />} />
                    <Route path="/admin/sessions" element={<AdminSessions />} />
                    <Route path="/admin/bookings" element={<AdminBookings />} />
                    <Route path="/admin/payments" element={<AdminPayments />} />
                    <Route path="/admin/analytics" element={<AdminAnalytics />} />
                    <Route path="/admin/settings" element={<AdminSettings />} />
                </Route>
            </Route>

            {/* Classroom (role-agnostic protected) */}
            <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} allowedRoles={['student', 'teacher', 'admin']} userRole={userRole} />}>
                <Route element={<ClassroomLayout />}>
                    <Route path="/classroom/:id" element={<Classroom />} />
                </Route>
            </Route>

            {/* Fallback */}
            <Route path="/unauthorized" element={<div>Unauthorized</div>} />
            <Route path="*" element={<div>404 - Not Found</div>} />
        </Routes>
    );
};

export default AppRoutes;
