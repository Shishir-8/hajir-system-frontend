
import AdminHeader from '@/components/common/header/admin-header'
import AdminSidebar from '@/components/common/sidebar/admin-sidebar'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

const AdminLayout = ({children}: {children:React.ReactNode}) => {
  return (
    <SidebarProvider>
      <AdminSidebar />

      <SidebarInset className='min-w-0'>
        <AdminHeader />

        <main className='flex flex-1 min-w-0 flex-col gap-4 p-4 bg-secondary'>
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default AdminLayout