import { SidebarItem } from "@/types/sidebar";
import {
  CalendarCheck,
  LayoutDashboard,
  LucideIcon,
  Settings,
  Users,
} from "lucide-react";


export const adminSidebarData: SidebarItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard/home",
    icon: LayoutDashboard,
    role: ['ADMIN', 'MANAGER', 'EMPLOYEE']
  },
  {
    title: "Employees",
    url: "/dashboard/employees",
    icon: Users,
    role: ['ADMIN', 'MANAGER', 'EMPLOYEE']
  },
  {
    title: "Attendance",
    url: "/admin/attendance",
    icon: CalendarCheck,
    role: ['ADMIN', 'MANAGER']
  },
  {
    title: "Settings",
    url: "/admin/settings",
    icon: Settings,
    role: ['ADMIN', 'MANAGER']
  },

  // for employee
  
];
