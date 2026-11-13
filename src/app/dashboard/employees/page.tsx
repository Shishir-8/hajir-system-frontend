'use client'
import PageHeader from "@/components/common/header/page-header";
import { GenericTable } from "@/components/common/table/generic-table";
import { employeeColumns } from "./components/employee-columns";
import { useFetch } from "@/hooks/use-fetch";
import { Employee, PaginatedResponse } from "@/types/employee";

const EmployeePage = () => {

  const {data, isPending, isError, error} = useFetch<PaginatedResponse<Employee>>("employees", '/employees')
  if(isError) {
    return <h1 className="text-center">Failed to load employees. {error.message}</h1>
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
      />
    </main>
  );
};

export default EmployeePage;
