import { Column } from "@/components/common/table/generic-table";
import { LeaveRecord } from "@/types/common";
import LeaveDetail from "./leave-detail";
import { formatDate } from "@/lib/format-date";

const statusStyles: Record<LeaveRecord["status"], string> = {
  PENDING: "bg-amber-100 text-amber-700",
  APPROVED: "bg-green-100 text-green-700",
  REJECTED: "bg-red-100 text-red-700",
};

const statusLabels: Record<LeaveRecord["status"], string> = {
  PENDING: "Pending",
  APPROVED: "Approved",
  REJECTED: "Rejected",
};

const leaveTypeLabels: Record<LeaveRecord["leave_type"], string> = {
  SICK: "Sick Leave",
  CASUAL: "Casual Leave",
  ANNUAL: "Annual Leave",
};

export const leaveColumns: Column<LeaveRecord>[] = [
  {
    title: "Employee",
    headerClassName: "text-left",
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
    render: (row) => leaveTypeLabels[row.leave_type],
  },
{
  title: "Leave Date",
  render: (row) => {
    return (
      <span className="text-sm font-medium">
        {row.start_date === row.end_date
          ? formatDate(row.start_date)
          : `${formatDate(row.start_date)} - ${formatDate(row.end_date)}`}
      </span>
    );
  },
},
  {
    title: "Duration",
    render: (row) => (
      <p>
        {row.number_of_days} {" "}
        {row.number_of_days === 1 ? "Day" : "Days"}
      </p>
    ),
  },
  {
    title: "Reason",
    render: (row) => (
      <span
        className="block max-w-[200px] truncate text-muted-foreground"
        title={row.reason}
      >
        {row.reason}
      </span>
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
  //   {
  //     title: "Reviewed At",
  //     render: (row) =>
  //       row.reviewed_at
  //         ? new Date(row.reviewed_at).toLocaleDateString()
  //         : "--",
  //   },
  {
    title: "Actions",
    headerClassName: "text-center",
    render: (row) => (
      <div className="flex justify-end">
        <LeaveDetail leave={row} />
      </div>
    ),
  },
];
