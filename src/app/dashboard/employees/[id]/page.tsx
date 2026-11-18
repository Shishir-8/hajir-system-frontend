'use client'
import { useFetch } from '@/hooks/use-fetch'
import EmployeeDetail from '../components/employee-details'
import PageHeader from '@/components/common/header/page-header'
import { useParams } from 'next/navigation'
import { Employee } from '@/types/employee'

const EmployeeDetailPage = () => {
    const { id } = useParams()

    const { data, isPending, error } = useFetch<Employee>(
        ['employees', String(id)],
        `/employees/${id}`
    )

    if (isPending) return <p>Loading employee...</p>;

    if (error || !data) {
        return <p>Failed to load employee details.</p>;
    }

    return (
        <main className='space-y-4 p-2'>
            <PageHeader
                title='Employee Details Page'
                subTitle='View employee details'
            />
            <EmployeeDetail employee={data} />
        </main>
    )
}

export default EmployeeDetailPage