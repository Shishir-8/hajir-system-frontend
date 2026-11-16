"use client";

import PageHeader from "@/components/common/header/page-header";
import { GenericTable } from "@/components/common/table/generic-table";
import { useFetch } from "@/hooks/use-fetch";
import { Department, PaginatedResponse } from "@/types/employee";
import { departmentColumns } from "./components/department-columns";
import withPermissions from "@/hoc/withPermissions";
import { EPermissions } from "@/types/role-permission";
import { useAuthStore } from "@/store/auth-store";

const DepartmentPage = () => {
  const { data, isPending, isError, error } = useFetch<PaginatedResponse<Department>>(
    "departments",
    "/departments",
  );

  const {userPermissions} = useAuthStore()
  console.log("User permissions in dpt", userPermissions)

  return (
    <main className="space-y-6 p-2">
      <PageHeader
        title="Department Page"
        subTitle="Manage all departments"
        buttonTitle="Add Department"
        url="/employees/add/"
      />

      <GenericTable
        columns={departmentColumns}
        data={data?.results ?? []}
        loading={isPending}
        getRowKey={(department) => department.id}
        emptyMessage="No departments found."
      />
    </main>
  );
};

export default withPermissions(DepartmentPage, [
  EPermissions.CAN_READ_DEPARTMENT
])
