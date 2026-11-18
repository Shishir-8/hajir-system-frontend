
"use client";
import PageHeader from "@/components/common/header/page-header";
import EmployeeForm from "../components/employee-form";

const AddEmployeePage = () => {
  return (
    <main className="space-y-6 p-2">

      <PageHeader title="Add New Employee" subTitle="Create an employee account and add their employment details." />

      <EmployeeForm />

    </main>
  );
};

export default AddEmployeePage;
