"use client";

import { useEffect, useState } from "react";
import PageHeader from "@/components/common/header/page-header";
import { GenericTable } from "@/components/common/table/generic-table";
import GenericPagination from "@/components/common/table/generic-pagination";
import { employeeColumns } from "./components/employee-columns";
import { useFetch } from "@/hooks/use-fetch";
import { useDebounce } from "@/hooks/use-debounce";
import { useFilterStore } from "@/store/filter-store";
import { Employee } from "@/types/employee";
import { PaginatedResponse } from "@/types/common";
import withPermissions from "@/hoc/withPermissions";
import { EPermissions } from "@/types/role-permission";

const EmployeePage = () => {
  const [selectedEmployeeIds, setSelectedEmployeeIds] = useState<(string | number)[]>([]);

  const { search, page, setPage } = useFilterStore()
  const debouncedSearch = useDebounce(search, 500);

  const { data, isPending, error } = useFetch<PaginatedResponse<Employee>>(
    ['employees'], '/employees/',
    {
      page,
      search: debouncedSearch
    }
  );

  return (
    <main className="space-y-4 p-2">
      <PageHeader
        title="Employee Page"
        subTitle="Manage your employees"
        buttonTitle="Add Employee"
        url="/dashboard/employees/add-employee"
        showSearch
      />

      {error ? (
        <h1 className="text-center">
          Failed to load employees. {error.message}
        </h1>
      ) : (
        <>
          <GenericTable
            columns={employeeColumns}
            data={data?.results ?? []}
            loading={isPending}
            getRowKey={(employee) => employee.id}
            emptyMessage="No employees found."
            selectable
            onSelectionChange={setSelectedEmployeeIds}
          />

          {data && (
            <GenericPagination
              data={data}
              onPageChange={setPage}
            />
          )}
        </>
      )}
    </main>
  );
};

export default withPermissions(EmployeePage, [
  EPermissions.CAN_READ_EMPLOYEE
]);