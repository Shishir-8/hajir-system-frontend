import { Column } from "@/components/common/table/generic-table";
import { formatDate } from "@/lib/format-date";
import { LeaveRecord } from "@/types/common";

const statusStyles: Record<LeaveRecord["status"], string> = {
  PENDING: "bg-amber-100 text-amber-700",
  APPROVED: "bg-emerald-100 text-emerald-700",
  REJECTED: "bg-red-100 text-red-700",
};

const statusLabels: Record<LeaveRecord["status"], string> = {
  PENDING: "Pending",
  APPROVED: "Approved",
  REJECTED: "Rejected",
};

export const myLeaveColumns: Column<LeaveRecord>[] = [
  {
    title: "Employee",
    render: (row) => (
      <div className="flex items-center gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
          {row.employee_name
            .split(" ")
            .map((name) => name[0])
            .join("")}
        </div>

        <div>
          <p className="font-medium text-foreground">{row.employee_name}</p>
        </div>
      </div>
    ),
  },
  {
    title: "Leave Type",
    render: (row) => (
      <span className="font-medium text-foreground">
        {row.leave_type.replace("_", " ")}
      </span>
    ),
  },
  {
    title: "Leave Date",
    render: (row) => (
      <span>
        {row.start_date === row.end_date
          ? formatDate(row.start_date)
          : `${formatDate(row.start_date)} - ${formatDate(row.end_date)}`}
      </span>
    ),
  },
  {
    title: "Duration",
    render: (row) => (
      <p>
        {row.number_of_days} {row.number_of_days === 1 ? "Day" : "Days"}
      </p>
    ),
  },
    {
    title: "Status",
    render: (row) => (
      <span
        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[row.status]}`}
      >
        {statusLabels[row.status]}
      </span>
    ),
  },
  {
    title: "Reason",
    render: (row) => (
      <span
        className="block max-w-[220px] truncate text-muted-foreground"
        title={row.reason}
      >
        {row.reason}
      </span>
    ),
  },

  // {
  //   title: "Applied On",
  //   render: (row) => new Date(row.created_at).toLocaleDateString(),
  // },
];
