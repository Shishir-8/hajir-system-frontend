import { Users, UserCheck, UserX, Clock } from "lucide-react";

export const adminStats = [
  {
    title: "Total Employees",
    value: "120",
    icon: Users,
  },
  {
    title: "Present Today",
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
