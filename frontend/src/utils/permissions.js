import { PERMISSIONS } from '../constants/permissions';

export const hasPermission = (userRole, permission) => {
    return PERMISSIONS[permission]?.includes(userRole) ?? false;
};

export const canAccess = (userRole, allowedRoles = []) => {
    return allowedRoles.includes(userRole);
};
