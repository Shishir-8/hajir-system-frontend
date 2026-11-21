
import { Employee } from "@/types/employee";
import { Badge } from "@/components/ui/badge";
import { Column } from "@/components/common/table/generic-table";
import TableAction from "@/components/common/table/table-actions";
import { deleteEmployee } from "@/services/employee-service";

export const employeeColumns: Column<Employee>[] = [
   {
    title: "Employee",
    render: (employee) => (
      <div className="flex items-center gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
          {employee.first_name
            .split(" ")
            .map((name) => name[0])
            .join("")}
        </div>

        <div>
          <p className="font-medium text-foreground">
            {employee.first_name} {employee.last_name}
          </p>
          <p className="text-xs text-muted-foreground">
            {employee.email}
          </p>
        </div>
      </div>
    ),
  },

  {
    title: "Designation",
    render: (employee) => (
      <span className="text-sm">{employee.designation}</span>
    ),
  },

  {
    title: "Phone Number",
    render: (employee) => (
      <span className="text-sm text-muted-foreground">
        {employee.phone_number}
      </span>
    ),
  },

  {
    title: "Address",
    render: (employee) => (
      <span className="text-sm text-muted-foreground">
        {employee.address || "-"}
      </span>
    ),
  },

  {
    title: "Status",
    render: (employee) => (
      <Badge
        variant={
          employee.employment_status === "ACTIVE"
            ? "default"
            : "secondary"
        }
      >
        {employee.employment_status}
      </Badge>
    ),
  },

  {
  title: "Actions",
  render: (employee) => (
    <div onClick={(e) => e.stopPropagation()}>
      <TableAction
        item={employee}
        editUrl={`/dashboard/employees/edit-employee/${employee.id}`}
        viewUrl={`/dashboard/employees/${employee.id}`}
        onDelete={(item) => deleteEmployee(item.id)}
        queryKey={["employees"]}
        name="Employee"
      />
    </div>
  ),
}

];
