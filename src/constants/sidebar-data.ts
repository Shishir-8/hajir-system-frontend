import { UserRole } from "@/types/role-permission";
import {
  LayoutDashboard,
  Users,
  Building2,
  CalendarCheck,
  CalendarDays,
  Clock,
  User,
  Settings,
} from "lucide-react";

import { LucideIcon } from "lucide-react";

export interface SidebarItem {
  title: string;
  url: string;
  icon: LucideIcon;
  roles: UserRole[];
}

export interface SidebarGroup {
  title: string;
  items: SidebarItem[];
}

export const sidebarData: SidebarGroup[] = [
  {
    title: "Workspace",
    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
        roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.EMPLOYEE],
      },
      {
        title: "Employees",
        url: "/dashboard/employees",
        icon: Users,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
      },
      {
        title: "Departments",
        url: "/dashboard/departments",
        icon: Building2,
        roles: [UserRole.ADMIN],
      },
      {
        title: "Attendance",
        url: "/dashboard/attendance",
        icon: CalendarCheck,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
      },
      {
        title: "Leave Management",
        url: "/dashboard/leaves",
        icon: CalendarDays,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
      },
      {
        title: "Settings",
        url: "/dashboard/settings",
        icon: Settings,
        roles: [UserRole.ADMIN],
      },
    ],
  },
  {
    title: "Personal",
    items: [
      {
        title: "My Profile",
        url: "/dashboard/my-profile",
        icon: User,
        roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.EMPLOYEE],
      },
      {
        title: "My Attendance",
        url: "/dashboard/my-attendance",
        icon: Clock,
        roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.EMPLOYEE],
      },
      {
        title: "My Leaves",
        url: "/dashboard/my-leaves",
        icon: CalendarDays,
        roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.EMPLOYEE],
      },
    ],
  },
];