import {
  CalendarDays,
  Clock,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import { LeaveRecord } from "@/types/common";
import { StatCard } from "@/components/common/admin/stat-card";

interface MyLeaveStatsProps {
  leaves: LeaveRecord[];
}

export function MyLeaveStats({ leaves }: MyLeaveStatsProps) {
  const stats = [
    {
      title: "Total Requests",
      value: leaves.length,
      description: "Your leave applications",
      icon: CalendarDays,
      iconColor: "text-indigo-600",
    },
    {
      title: "Pending",
      value: leaves.filter((leave) => leave.status === "PENDING").length,
      description: "Awaiting approval",
      icon: Clock,
      iconColor: "text-amber-600",
    },
    {
      title: "Approved",
      value: leaves.filter((leave) => leave.status === "APPROVED").length,
      description: "Approved leave requests",
      icon: CheckCircle2,
      iconColor: "text-emerald-600",
    },
    {
      title: "Rejected",
      value: leaves.filter((leave) => leave.status === "REJECTED").length,
      description: "Rejected requests",
      icon: XCircle,
      iconColor: "text-red-600",
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