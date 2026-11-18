"use client";

import PageHeader from "@/components/common/header/page-header";
import { GenericTable } from "@/components/common/table/generic-table";
import { useFetch } from "@/hooks/use-fetch";
import { Department } from "@/types/employee";
import { departmentColumns } from "./components/department-columns";
import withPermissions from "@/hoc/withPermissions";
import { EPermissions } from "@/types/role-permission";
import { useAuthStore } from "@/store/auth-store";
import { PaginatedResponse } from "@/types/common";

const DepartmentPage = () => {
  const { data, isPending, error } = useFetch<PaginatedResponse<Department>>(
    ["departments"],
    "/departments",
  );

  if(error) {
    return <p>Failed to load departments {error?.message}</p>
  }

  return (
    <main className="space-y-6 p-2">
      <PageHeader
        title="Department Page"
        subTitle="Manage all departments"
        buttonTitle="Add Department"
        url="/dashboard/departments/add-department"
      />

      <GenericTable
        columns={departmentColumns}
        data={data?.results ?? []}
        loading={isPending}
        getRowKey={(department) => department.id}
        emptyMessage="No departments found."
        selectable
      />
    </main>
  );
};

export default withPermissions(DepartmentPage, [
  EPermissions.CAN_READ_DEPARTMENT
])
