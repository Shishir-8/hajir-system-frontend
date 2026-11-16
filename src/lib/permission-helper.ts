
import { EPermissions } from "@/types/role-permission";

export const hasPermission = (
  userPermissions: EPermissions[],
  permission: EPermissions,
): boolean => {
  return userPermissions.includes(permission);
};


export const hasAllPermissions = (
  userPermissions: EPermissions[],
  requiredPermissions: EPermissions[],
): boolean => {
  return requiredPermissions.every((permission) =>
    userPermissions.includes(permission),
  );
};
