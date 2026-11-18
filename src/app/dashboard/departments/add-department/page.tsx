'use client'
import PageHeader from '@/components/common/header/page-header'
import DepartmentForm from '../components/department-form'

const AddDepartmentPage = () => {
  return (
    <section className='space-y-4 p-2'>
      <PageHeader
        title='Add Department'
        subTitle='Create a new department and assign its details to organize your workforce.'
      />

      <DepartmentForm />
    </section>
  )
}

export default AddDepartmentPage