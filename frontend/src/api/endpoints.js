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
        BY_ROLE: (role) => `/users?role=${role}`,
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
        PUBLISH: (id) => `/courses/${id}/publish`,
    },

    // Sessions
    SESSIONS: {
        BASE: '/sessions',
        BY_ID: (id) => `/sessions/${id}`,
        BOOK: '/sessions/book',
        UPCOMING: '/sessions/upcoming',
        CANCEL: (id) => `/sessions/${id}/cancel`,
    },

    // Bookings
    BOOKINGS: {
        BASE: '/bookings',
        BY_ID: (id) => `/bookings/${id}`,
        CANCEL: (id) => `/bookings/${id}/cancel`,
    },

    // Payments
    PAYMENTS: {
        BASE: '/payments',
        HISTORY: '/payments/history',
        INVOICE: (id) => `/payments/${id}/invoice`,
        REFUND: (id) => `/payments/${id}/refund`,
    },

    // Classroom
    CLASSROOM: {
        JOIN: (id) => `/classroom/${id}/join`,
        LEAVE: (id) => `/classroom/${id}/leave`,
        MESSAGES: (id) => `/classroom/${id}/messages`,
        PARTICIPANTS: (id) => `/classroom/${id}/participants`,
    },

    // Admin
    ADMIN: {
        ANALYTICS: '/admin/analytics',
        REPORTS: '/admin/reports',
        USERS: '/admin/users',
        USER_BY_ID: (id) => `/admin/users/${id}`,
        TEACHERS: '/admin/teachers',
        TEACHER_BY_ID: (id) => `/admin/teachers/${id}`,
        STUDENTS: '/admin/students',
        STUDENT_BY_ID: (id) => `/admin/students/${id}`,
        SESSIONS: '/admin/sessions',
        SESSION_BY_ID: (id) => `/admin/sessions/${id}`,
        SETTINGS: '/admin/settings',
    },
};

export default ENDPOINTS;
