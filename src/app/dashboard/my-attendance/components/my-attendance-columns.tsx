import { Column } from "@/components/common/table/generic-table";
import { Badge } from "@/components/ui/badge";
import { AttendanceRecord } from "@/constants/admin-type";
import { CalendarDays } from "lucide-react";


export const myAttendancecolumns: Column<AttendanceRecord>[] = [
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
    render: (row) => (
      <div className="flex items-center gap-2">
        <CalendarDays className="h-4 w-4 text-muted-foreground" />
        <span className="font-medium">{row.date}</span>
      </div>
    ),
  },
  {
    title: "Check In",
    render: (row) => row.check_in || "--",
  },
  {
    title: "Check Out",
    render: (row) => row.check_out || "--",
  },
  {
    title: "Status",
    render: (row) => (
      <Badge
        variant="outline"
        className={
          row.status === "PRESENT"
            ? "border-emerald-200 bg-emerald-50 text-emerald-700"
            : row.status === "LATE"
              ? "border-amber-200 bg-amber-50 text-amber-700"
              : "border-blue-200 bg-blue-50 text-blue-700"
        }
      >
        {row.status.replace("_", " ")}
      </Badge>
    ),
  },
  {
    title: "Day Type",
    render: (row) => (
      <span className="text-muted-foreground">
        {row.working_day_type?.replace("_", " ") || "--"}
      </span>
    ),
  },
];