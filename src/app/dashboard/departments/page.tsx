"use client";

import PageHeader from "@/components/common/header/page-header";
import { GenericTable } from "@/components/common/table/generic-table";
import { useFetch } from "@/hooks/use-fetch";
import { Department, PaginatedResponse } from "@/types/employee";
import { departmentColumns } from "./components/department-columns";

const DepartmentPage = () => {
  const { data, isPending, isError, error } = useFetch<PaginatedResponse<Department>>(
    "departments",
    "/departments",
  );

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
        getRowKey={(employee) => employee.id}
        emptyMessage="No employees found."
      />
    </main>
  );
};

export default DepartmentPage;
