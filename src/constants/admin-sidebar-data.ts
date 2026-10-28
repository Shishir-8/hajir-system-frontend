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
    url: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Employees",
    url: "/admin/employees",
    icon: Users,
  },
  {
    title: "Attendance",
    url: "/admin/attendance",
    icon: CalendarCheck,
  },
  {
    title: "Settings",
    url: "/admin/settings",
    icon: Settings,
  },
];
