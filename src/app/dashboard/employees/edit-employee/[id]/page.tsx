'use client'

import PageHeader from "@/components/common/header/page-header"
import EmployeeForm from "../../components/employee-form"
import { useParams } from "next/navigation"
import { useFetch } from "@/hooks/use-fetch"
import { Employee } from "@/types/employee"

const EditEmployeePage = () => {
    const { id } = useParams()
    const employeeId = Number(id)

    const { data, isPending, error } = useFetch<Employee>(
        ['employees', String(employeeId)],
        `/employees/${employeeId}`
    )

    console.log(data)

    if (isPending) return <p>Loading employee...</p>;

    if (error || !data) {
        return <p>Failed to load employee details.</p>;
    }

    return (
        <main className="space-y-4 p-2">
            <PageHeader
                title="Edit Employee"
                subTitle="Update employee profile details, role, and contact information."
            />

            <EmployeeForm initialData={data} />
        </main>
    )
}

export default EditEmployeePage