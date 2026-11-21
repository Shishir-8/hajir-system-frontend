import { Column } from "@/components/common/table/generic-table";
import TableAction from "@/components/common/table/table-actions";
import { AttendanceRecord, AttendanceStatus } from "@/constants/admin-type";
import { deleteAttendance } from "@/services/attendance-service";


const statusStyles: Record<AttendanceStatus, string> = {
  IN_PROGRESS: "bg-blue-100 text-blue-700",
  PRESENT: "bg-green-100 text-green-700",
  LATE: "bg-amber-100 text-amber-700",
  ABSENT: "bg-red-100 text-red-700",
  ON_LEAVE: "bg-blue-100 text-blue-700",
  HOLIDAY: "bg-purple-100 text-purple-700",
};

const statusLabels: Record<AttendanceStatus, string> = {
  IN_PROGRESS: "In Progress",
  PRESENT: "Present",
  LATE: "Late",
  ABSENT: "Absent",
  ON_LEAVE: "On Leave",
  HOLIDAY: "Holiday",
};

export const attendanceColumns: Column<AttendanceRecord>[] = [
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
          <p className="font-medium text-foreground">
            {row.employee_name}
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Date",
    render: (row) => row.date,
  },
  {
    title: "Check In",
    render: (row) => row.check_in ?? "--",
  },
  {
    title: "Check Out",
    render: (row) => row.check_out ?? "--",
  },
  {
    title: "Late MINUTES",
    render: (row) => (
      <span
        className={
          row.late_minutes > 0
            ? "font-medium text-amber-600"
            : "text-muted-foreground"
        }
      >
        {row.late_minutes > 0 ? `${row.late_minutes} min` : "--"}
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
  {
    title: "Day Type",
    render: (row) => (
      <span className="text-muted-foreground">
        {row.working_day_type === "FULL_DAY"
          ? "Full Day"
          : row.working_day_type === "HALF_DAY"
            ? "Half Day"
            : "--"}
      </span>
    ),
  },

  {
    title: "Actions",
    headerClassName: "text-right",
    className: "text-right",
    render: (row) => (
      <div className="flex justify-end">
        <TableAction
          item={row}
          onDelete={(item) => deleteAttendance(item.id)}
          queryKey={["attendance"]}
          editUrl={`/dashboard/attendance/${row.id}/edit`}
          viewUrl={`/dashboard/attendance/${row.id}`}
          name={row.employee_name}
        />
      </div>
    ),
  },
 
];
