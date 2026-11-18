'use client'

import PageHeader from "@/components/common/header/page-header"
import DepartmentForm from "../../components/department-form"
import { useParams } from "next/navigation"
import { useFetch } from "@/hooks/use-fetch"
import { Department } from "@/types/employee"

const EditDepartmentPage = () => {
    const { id } = useParams<{ id: string }>()
    const { data, isPending, error } = useFetch<Department>(
        ['departments', id],
        `/departments/${id}`
    )

    if (isPending) {
        return <p>Loading...</p>
    }

    if (error || !data) {
        return <p>Failed to load employee details.</p>;
    }

    return (
        <main className="space-y-4 p-2">
            <PageHeader
                title="Edit Department"
                subTitle="Update department details and manage its status."
            />
            <DepartmentForm initialData={data} />
        </main>
    )
}

export default EditDepartmentPage