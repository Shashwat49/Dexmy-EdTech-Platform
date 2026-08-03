import { ROLES } from './roles';

export const PERMISSIONS = {
    // Course
    CREATE_COURSE: [ROLES.TEACHER, ROLES.ADMIN],
    EDIT_COURSE: [ROLES.TEACHER, ROLES.ADMIN],
    DELETE_COURSE: [ROLES.ADMIN],
    VIEW_COURSE: [ROLES.STUDENT, ROLES.TEACHER, ROLES.ADMIN],

    // Session
    BOOK_SESSION: [ROLES.STUDENT],
    MANAGE_SESSION: [ROLES.TEACHER, ROLES.ADMIN],

    // User
    MANAGE_USERS: [ROLES.ADMIN],
    VIEW_EARNINGS: [ROLES.TEACHER, ROLES.ADMIN],
    VIEW_ANALYTICS: [ROLES.ADMIN],
};

export const hasPermission = (userRole, permission) => {
    return PERMISSIONS[permission]?.includes(userRole) ?? false;
};
