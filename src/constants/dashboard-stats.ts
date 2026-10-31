import {
  Users,
  CalendarDays,
  UserCheck,
  ClipboardList,
  Clock,
  CalendarCheck,
} from "lucide-react";

export const adminStats = [
  {
    title: "Total Employees",
    value: 128,
    icon: Users,
  },
  {
    title: "On Leave Today",
    value: 8,
    icon: CalendarDays,
  },
  {
    title: "Present Today",
    value: 112,
    icon: UserCheck,
  },
  {
    title: "Pending Requests",
    value: 6,
    icon: ClipboardList,
  },
];

export const employeeStats = [
  {
    title: "Attendance This Month",
    value: "21 days",
    icon: CalendarCheck,
  },
  {
    title: "Leave Balance",
    value: "12 days",
    icon: CalendarDays,
  },
  {
    title: "Hours This Month",
    value: "152 hrs",
    icon: Clock,
  },
  {
    title: "Pending Leave Requests",
    value: 1,
    icon: ClipboardList,
  },
];