import { StatCard } from "@/components/common/admin/stat-card";
import {
  Users,
  UserX,
  Clock,
  CalendarCheck,
} from "lucide-react";

interface AttendanceStatsProps {
  present: number;
  absent: number;
  late: number;
  onLeave: number;
}

export function AttendanceStats({
  present,
  absent,
  late,
  onLeave,
}: AttendanceStatsProps) {
  const stats = [
    {
      title: "Present Today",
      value: present,
      description: "Employees present",
      icon: Users,
      iconColor: "text-emerald-600",
    },
    {
      title: "Absent Today",
      value: absent,
      description: "Employees absent",
      icon: UserX,
      iconColor: "text-red-600",
    },
    {
      title: "Late Today",
      value: late,
      description: "Late arrivals",
      icon: Clock,
      iconColor: "text-amber-600",
    },
    {
      title: "On Leave Today",
      value: onLeave,
      description: "Approved leave requests",
      icon: CalendarCheck,
      iconColor: "text-blue-600",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <StatCard key={item.title} {...item} />
      ))}
    </div>
  );
}