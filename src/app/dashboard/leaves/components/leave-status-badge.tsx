
import { Badge } from "@/components/ui/badge";
import { LeaveStatus } from "@/types/leave";

const statusStyles: Record<
  LeaveStatus,
  string
> = {
  PENDING:
    "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-400",
  APPROVED:
    "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-400",
  REJECTED:
    "border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-900 dark:bg-rose-950 dark:text-rose-400",
  CANCELLED:
    "border-muted bg-muted text-muted-foreground",
};

export function LeaveStatusBadge({
  status,
}: {
  status: LeaveStatus;
}) {
  return (
    <Badge
      variant="outline"
      className={statusStyles[status]}
    >
      {status.charAt(0) + status.slice(1).toLowerCase()}
    </Badge>
  );
}
