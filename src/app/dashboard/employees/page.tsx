import PageHeader from "@/components/common/header/page-header";
import { GenericTable } from "@/components/common/table/generic-table";
import React from "react";
import { employeeColumns } from "./components/employee-columns";
import { employees } from "@/constants/employee-data";

const EmployeePage = () => {
  return (
    <main className="space-y-6 p-2">
      <PageHeader
       title="Employee Page"
       subTitle="Manage your employees" />

      <GenericTable
        columns={employeeColumns}
        data={employees}
        getRowKey={(employee) => employee.id}
        emptyMessage="No employees found."
      />
    </main>
  );
};

export default EmployeePage;
