const ENDPOINTS = {
    // Auth
    AUTH: {
        LOGIN: '/auth/login',
        REGISTER: '/auth/register',
        LOGOUT: '/auth/logout',
        FORGOT_PASSWORD: '/auth/forgot-password',
        RESET_PASSWORD: '/auth/reset-password',
        VERIFY_EMAIL: '/auth/verify-email',
        ME: '/auth/me',
    },

    // Users
    USERS: {
        BASE: '/users',
        BY_ID: (id) => `/users/${id}`,
    },

    // Students
    STUDENTS: {
        BASE: '/students',
        BY_ID: (id) => `/students/${id}`,
        COURSES: (id) => `/students/${id}/courses`,
        SESSIONS: (id) => `/students/${id}/sessions`,
        PROGRESS: (id) => `/students/${id}/progress`,
    },

    // Teachers
    TEACHERS: {
        BASE: '/teachers',
        BY_ID: (id) => `/teachers/${id}`,
        COURSES: (id) => `/teachers/${id}/courses`,
        BOOKINGS: (id) => `/teachers/${id}/bookings`,
        EARNINGS: (id) => `/teachers/${id}/earnings`,
    },

    // Courses
    COURSES: {
        BASE: '/courses',
        BY_ID: (id) => `/courses/${id}`,
    },

    // Sessions
    SESSIONS: {
        BASE: '/sessions',
        BY_ID: (id) => `/sessions/${id}`,
        BOOK: '/sessions/book',
        UPCOMING: '/sessions/upcoming',
    },

    // Bookings
    BOOKINGS: {
        BASE: '/bookings',
        BY_ID: (id) => `/bookings/${id}`,
    },

    // Payments
    PAYMENTS: {
        BASE: '/payments',
        HISTORY: '/payments/history',
        INVOICE: (id) => `/payments/${id}/invoice`,
    },

    // Classroom
    CLASSROOM: {
        JOIN: (id) => `/classroom/${id}/join`,
        LEAVE: (id) => `/classroom/${id}/leave`,
    },

    // Admin
    ADMIN: {
        ANALYTICS: '/admin/analytics',
        REPORTS: '/admin/reports',
    },
};

export default ENDPOINTS;
