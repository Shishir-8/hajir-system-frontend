
import { StatCard } from "@/components/common/admin/stat-card";
import {
  Files,
  Clock,
  CheckCircle2,
  XCircle,
} from "lucide-react";


const leaveStats = [
  {
    title: "Total Requests",
    value: 128,
    description: "All leave requests",
    icon: Files,
    iconColor: "text-indigo-600",
  },
  {
    title: "Pending",
    value: 12,
    description: "Awaiting approval",
    icon: Clock,
    iconColor: "text-amber-600",
  },
  {
    title: "Approved",
    value: 96,
    description: "Successfully approved",
    icon: CheckCircle2,
    iconColor: "text-emerald-600",
  },
  {
    title: "Rejected",
    value: 20,
    description: "Rejected requests",
    icon: XCircle,
    iconColor: "text-rose-600",
  },
];

export function LeaveStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {leaveStats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}
