import { sidebarData } from "@/constants/sidebar-data";
import { UserRole } from "@/types/role-permission";

export const getSidebarItems = (role: UserRole) => {
  return sidebarData
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => item.roles.includes(role)),
    }))
    .filter((group) => group.items.length > 0);
};
