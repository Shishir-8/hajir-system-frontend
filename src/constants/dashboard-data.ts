import { ChartConfig } from "@/components/ui/chart";
import { Users, UserCheck, UserX, Clock, CalendarCheck, CalendarDays } from "lucide-react";

export const adminStats = [
  {
    title: "Total Employees",
    value: "120",
    description: "Registered employees",
    icon: Users,
    iconColor: "text-indigo-600",
  },
  {
    title: "Total Departments",
    value: "12",
    description: "Active departments",
    icon: UserCheck,
    iconColor: "text-blue-600",
  },
  {
    title: "Absent Today",
    value: "10",
    description: "Employees absent today",
    icon: UserX,
    iconColor: "text-red-600",
  },
  {
    title: "Total Leaves",
    value: "5",
    description: "Employees total leaves today",
    icon: Clock,
    iconColor: "text-amber-600",
  },

];

export const employeeStats = [
  {
    title: "Total Attendance",
    value: "22",
    description: "Working days this month",
    icon: CalendarCheck,
    iconColor: "text-indigo-600",
  },
  {
    title: "Present Days",
    value: "20",
    description: "Days attended this month",
    icon: UserCheck,
    iconColor: "text-emerald-600",
  },
  {
    title: "Leave Balance",
    value: "8",
    description: "Available leave days",
    icon: CalendarDays,
    iconColor: "text-blue-600",
  },
  {
    title: "Late Arrivals",
    value: "2",
    description: "Late check-ins this month",
    icon: Clock,
    iconColor: "text-amber-600",
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





import { Leave } from "../types/leave";

export const mockLeaves: Leave[] = [
  {
    id: 1,
    employeeName: "Aarav Sharma",
    employeeEmail: "aarav@example.com",
    department: "Engineering",
    leaveType: "CASUAL",
    startDate: "2026-11-24",
    endDate: "2026-11-25",
    days: 2,
    reason: "Personal work and family commitments.",
    status: "PENDING",
    appliedOn: "2026-11-20",
  },
  {
    id: 2,
    employeeName: "Sita Thapa",
    employeeEmail: "sita@example.com",
    department: "Human Resources",
    leaveType: "SICK",
    startDate: "2026-11-26",
    endDate: "2026-11-27",
    days: 2,
    reason: "I am not feeling well and need some rest.",
    status: "PENDING",
    appliedOn: "2026-11-21",
  },
  {
    id: 3,
    employeeName: "Rohan KC",
    employeeEmail: "rohan@example.com",
    department: "Finance",
    leaveType: "ANNUAL",
    startDate: "2026-11-28",
    endDate: "2026-11-30",
    days: 3,
    reason: "Family vacation.",
    status: "APPROVED",
    appliedOn: "2026-11-18",
  },
  {
    id: 4,
    employeeName: "Priya Adhikari",
    employeeEmail: "priya@example.com",
    department: "Engineering",
    leaveType: "CASUAL",
    startDate: "2026-11-22",
    endDate: "2026-11-22",
    days: 1,
    reason: "Personal appointment.",
    status: "REJECTED",
    appliedOn: "2026-11-17",
  },
  {
    id: 5,
    employeeName: "Bibek Karki",
    employeeEmail: "bibek@example.com",
    department: "Marketing",
    leaveType: "UNPAID",
    startDate: "2026-12-02",
    endDate: "2026-12-04",
    days: 3,
    reason: "Personal commitments.",
    status: "PENDING",
    appliedOn: "2026-11-21",
  },
  {
    id: 6,
    employeeName: "Nisha Gurung",
    employeeEmail: "nisha@example.com",
    department: "Operations",
    leaveType: "SICK",
    startDate: "2026-11-19",
    endDate: "2026-11-20",
    days: 2,
    reason: "Medical rest.",
    status: "CANCELLED",
    appliedOn: "2026-11-16",
  },
];

