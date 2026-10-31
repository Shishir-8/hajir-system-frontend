'use client'
import AdminHeader from '@/components/common/header/admin-header'
import AdminSidebar from '@/components/common/sidebar/admin-sidebar'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { sidebarData } from '@/constants/sidebar-data'
import { useAuthStore } from '@/store/auth-store'
import React from 'react'

const DashboardLayout = ({children}: {children:React.ReactNode}) => {

  const {user} = useAuthStore()

  const userRole = user?.role
  const allowedLinks = sidebarData.filter((link)=> link.role.includes(userRole))
  
  return (
    <SidebarProvider>
      <AdminSidebar links={allowedLinks} />

      <SidebarInset className='min-w-0'>
        <AdminHeader />

        <main className='flex flex-1 min-w-0 flex-col gap-4 p-4 bg-secondary'>
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default DashboardLayout