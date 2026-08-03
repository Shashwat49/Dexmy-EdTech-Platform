export const ROUTES = {
    // Public
    HOME: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
    RESET_PASSWORD: '/reset-password',
    VERIFY_EMAIL: '/verify-email',
    UNAUTHORIZED: '/unauthorized',
    NOT_FOUND: '*',
    ABOUT: '/about',
    CONTACT: '/contact',
    FAQ: '/faq',
    BECOME_TUTOR: '/become-tutor',
    PRIVACY: '/privacy',
    TERMS: '/terms',

    // Student
    STUDENT: {
        DASHBOARD: '/student',
        COURSES: '/student/courses',
        COURSE_DETAILS: (id = ':id') => `/student/courses/${id}`,
        TEACHERS: '/student/teachers',
        TEACHER_PROFILE: (id = ':id') => `/student/teachers/${id}`,
        SESSIONS: '/student/sessions',
        SESSION_DETAILS: (id = ':id') => `/student/sessions/${id}`,
        PURCHASES: '/student/purchases',
        ASSIGNMENTS: '/student/assignments',
        PROGRESS: '/student/progress',
        PROFILE: '/student/profile',
        SETTINGS: '/student/settings',
        NOTIFICATIONS: '/student/notifications',
    },

    // Teacher
    TEACHER: {
        DASHBOARD: '/teacher',
        COURSES: '/teacher/courses',
        CREATE_COURSE: '/teacher/courses/create',
        EDIT_COURSE: (id = ':id') => `/teacher/courses/${id}/edit`,
        BOOKINGS: '/teacher/bookings',
        SESSIONS: '/teacher/sessions',
        STUDENTS: '/teacher/students',
        EARNINGS: '/teacher/earnings',
        ASSIGNMENTS: '/teacher/assignments',
        PROFILE: '/teacher/profile',
        SETTINGS: '/teacher/settings',
    },

    // Admin
    ADMIN: {
        DASHBOARD: '/admin',
        USERS: '/admin/users',
        STUDENTS: '/admin/students',
        TEACHERS: '/admin/teachers',
        COURSES: '/admin/courses',
        BOOKINGS: '/admin/bookings',
        PAYMENTS: '/admin/payments',
        ANALYTICS: '/admin/analytics',
        REPORTS: '/admin/reports',
        SETTINGS: '/admin/settings',
    },

    // Shared
    SESSIONS: '/sessions',
    SESSION_DETAILS: (id = ':id') => `/sessions/${id}`,
    BOOK_SESSION: '/sessions/book',
    UPCOMING_SESSIONS: '/sessions/upcoming',
    CLASSROOM: (id = ':id') => `/classroom/${id}`,
    PURCHASES: '/purchases',
    INVOICE: (id = ':id') => `/purchases/invoice/${id}`,
};
