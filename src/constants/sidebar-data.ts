
import {
  CalendarCheck,
  CalendarDays,
  LayoutDashboard,
  Settings,
  UserRound,
  Users,
  Building2,
} from "lucide-react";

import { SidebarItem } from "@/types/sidebar";

export const sidebarData: SidebarItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard/home",
    icon: LayoutDashboard,
    role: ["ADMIN", "MANAGER", "EMPLOYEE"],
  },
  {
    title: "Employees",
    url: "/dashboard/employees",
    icon: Users,
    role: ["ADMIN", "MANAGER"],
  },
  {
    title: "Attendance",
    url: "/dashboard/attendance",
    icon: CalendarCheck,
    role: ["ADMIN", "MANAGER"],
  },
  {
    title: "Leave Management",
    url: "/dashboard/leave-management",
    icon: CalendarDays,
    role: ["ADMIN", "MANAGER"],
  },
  {
    title: "Departments",
    url: "/dashboard/departments",
    icon: Building2,
    role: ["ADMIN", "MANAGER"],
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
    role: ["ADMIN"],
  },
  {
    title: "My Attendance",
    url: "/dashboard/attendance",
    icon: CalendarCheck,
    role: ["EMPLOYEE"],
  },
  {
    title: "My Leaves",
    url: "/dashboard/my-leaves",
    icon: CalendarDays,
    role: ["EMPLOYEE"],
  },
  {
    title: "My Profile",
    url: "/dashboard/profile",
    icon: UserRound,
    role: ["ADMIN", "MANAGER", "EMPLOYEE"],
  },
];
