
import { Employee } from "@/types/employee";
import { Badge } from "@/components/ui/badge";
import { Column } from "@/components/common/table/generic-table";
import TableAction from "@/components/common/table/table-actions";
import { deleteEmployee } from "@/services/employee-service";

export const employeeColumns: Column<Employee>[] = [
  {
    title: "Employee",
    render: (employee) => (
      <div>
        <p className="text-sm font-medium">
          {employee.first_name} {employee.last_name}
        </p>
        <p className="text-xs text-muted-foreground">
          {employee.email}
        </p>
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
