import { Badge } from "@/components/ui/badge";
import { Column } from "@/components/common/table/generic-table";
import { Department } from "@/types/employee";
import TableAction from "@/components/common/table/table-actions";
import { deleteDepartment } from "@/services/department-service";

export const departmentColumns: Column<Department>[] = [
  {
    title: "Department Name",
    render: (department) => (
      <span className="text-sm font-medium">{department.name}</span>
    ),
  },

  {
    title: "Status",
    render: (department) => (
      <Badge
        variant={department.is_active ? "default" : "secondary"}
        className="text-xs font-medium"
      >
        {department.is_active ? "Active" : "Inactive"}
      </Badge>
    ),
  },

  {
    title: "Created At",
    render: (department) => (
      <span className="text-sm text-muted-foreground">
        {new Date(department.created_at).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </span>
    ),
  },

  {
    title: "Last Updated",
    render: (department) => (
      <span className="text-sm text-muted-foreground">
        {new Date(department.updated_at).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </span>
    ),
  },

  {
    title: "Actions",
    render: (department) => (
      <div onClick={(e) => e.stopPropagation()}>
        <TableAction
          item={department}
          showView={false}
          editUrl={`/dashboard/departments/edit-department/${department.id}`}
          onDelete={(item) => deleteDepartment(item.id)}
          queryKey={['departments']}
          name="Department"
        />
      </div>
    ),
  },
];