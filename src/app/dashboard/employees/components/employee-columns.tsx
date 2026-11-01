
import { Employee } from "@/types/employee";
import { Badge } from "@/components/ui/badge";
import { Column } from "@/components/common/table/generic-table";

export const employeeColumns: Column<Employee>[] = [
  {
    key: "id",
    header: "ID",
  },
  {
    key: "first_name",
    header: "Employee",
    render: (employee) => (
      <div>
        <p className="font-medium">
          {employee.first_name} {employee.last_name}
        </p>
        <p className="text-xs text-muted-foreground">
          {employee.email}
        </p>
      </div>
    ),
  },
  {
    key: "role",
    header: "Role",
  },
  {
    key: "status",
    header: "Status",
    render: (employee) => (
      <Badge
        variant={
          employee.status === "ACTIVE" ? "default" : "secondary"
        }
      >
        {employee.status}
      </Badge>
    ),
  },
];