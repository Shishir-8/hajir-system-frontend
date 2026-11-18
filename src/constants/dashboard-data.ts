import { ChartConfig } from "@/components/ui/chart";
import { Users, UserCheck, UserX, Clock, CalendarCheck, CalendarDays } from "lucide-react";

export const adminStats = [
  {
    title: "Total Employees",
    value: "120",
    icon: Users,
  },
  {
    title: "Total Departments",
    value: "105",
    icon: UserCheck,
  },
  {
    title: "Absent Today",
    value: "10",
    icon: UserX,
  },
  {
    title: "Late Arrivals",
    value: "5",
    icon: Clock,
  },
];

export const employeeStats = [
  {
    title: "Total Attendance",
    value: "22",
    icon: CalendarCheck,
  },
  {
    title: "Present Days",
    value: "20",
    icon: UserCheck,
  },
  {
    title: "Leave Balance",
    value: "8",
    icon: CalendarDays,
  },
  {
    title: "Late Arrivals",
    value: "2",
    icon: Clock,
  },
];


export const recentAttendance = [
  {
    id: 1,
    name: "John Smith",
    department: "IT",
    checkIn: "09:00 AM",
    status: "Present",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    department: "HR",
    checkIn: "09:25 AM",
    status: "Late",
  },
  {
    id: 3,
    name: "David Brown",
    department: "Finance",
    checkIn: "—",
    status: "Absent",
  },
  {
    id: 4,
    name: "Michael Lee",
    department: "IT",
    checkIn: "08:55 AM",
    status: "Present",
  },
];

export const upcomingLeaves = [
  {
    id: 1,
    name: "Sarah Wilson",
    department: "HR",
    leaveType: "Casual Leave",
    date: "Nov 03, 2026",
    status: "Pending",
  },
  {
    id: 2,
    name: "Michael Lee",
    department: "IT",
    leaveType: "Sick Leave",
    date: "Nov 04, 2026",
    status: "Approved",
  },
  {
    id: 3,
    name: "Emily Davis",
    department: "Finance",
    leaveType: "Annual Leave",
    date: "Nov 06, 2026",
    status: "Pending",
  },
];

export const recentEmployees = [
  {
    id: 1,
    name: "Robert Johnson",
    email: "robert@example.com",
    department: "IT",
    designation: "Frontend Developer",
    joinedAt: "Oct 28, 2026",
  },
  {
    id: 2,
    name: "Emily Davis",
    email: "emily@example.com",
    department: "Finance",
    designation: "Accountant",
    joinedAt: "Oct 25, 2026",
  },
  {
    id: 3,
    name: "Daniel Wilson",
    email: "daniel@example.com",
    department: "HR",
    designation: "HR Executive",
    joinedAt: "Oct 22, 2026",
  },
];


export const attendanceData = [
  { day: "Sun", present: 0, absent: 0 },
  { day: "Mon", present: 105, absent: 12 },
  { day: "Tue", present: 110, absent: 8 },
  { day: "Wed", present: 98, absent: 18 },
  { day: "Thu", present: 115, absent: 7 },
  { day: "Fri", present: 108, absent: 10 },
  { day: "Sat", present: 95, absent: 15 },
];

export const chartConfig = {
  present: {
    label: "Present",
    color: "#4F46E5",
  },
  absent: {
    label: "Absent",
    color: "#EF4444",
  },
} satisfies ChartConfig;
