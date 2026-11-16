"use client";
import PageHeader from "@/components/common/header/page-header";
import { GenericTable } from "@/components/common/table/generic-table";
import { employeeColumns } from "./components/employee-columns";
import { useFetch } from "@/hooks/use-fetch";
import { Employee, PaginatedResponse } from "@/types/employee";
import withPermissions from "@/hoc/withPermissions";
import { EPermissions } from "@/types/role-permission";
import { useState } from "react";

const EmployeePage = () => {
  const [selectedEmployeeIds, setSelectedEmployeeIds] = useState<
    (string | number)[]
  >([]);

  const { data, isPending, isError, error } = useFetch<
    PaginatedResponse<Employee>
  >("employees", "/employees");

  if (isError) {
    return (
      <h1 className="text-center">Failed to load employees. {error.message}</h1>
    );
  }

  return (
    <main className="space-y-6 p-2">
      <PageHeader
        title="Employee Page"
        subTitle="Manage your employees"
        buttonTitle="Add Employee"
        url="/employees/add/"
      />

      <GenericTable
        columns={employeeColumns}
        data={data?.results ?? []}
        loading={isPending}
        getRowKey={(employee) => employee.id}
        emptyMessage="No employees found."
        selectable
        onSelectionChange={setSelectedEmployeeIds}
      />
      <p className="text-sm text-muted-foreground">
        {selectedEmployeeIds.length} employees selected
      </p>
    </main>
  );
};

export default withPermissions(EmployeePage, [EPermissions.CAN_READ_EMPLOYEE]);
