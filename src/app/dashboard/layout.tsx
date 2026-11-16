"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import AdminHeader from "@/components/common/header/admin-header";
import AdminSidebar from "@/components/common/sidebar/dashboard-sidebar";

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";


import { useAuthStore } from "@/store/auth-store";
import { getSidebarItems } from "@/lib/sidebar-helper";

const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { user, isAuthenticated, hydrated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (hydrated && (!isAuthenticated || !user)) {
      router.replace("/login");
    }
  }, [hydrated, isAuthenticated, user, router]);

  if (!hydrated || !isAuthenticated || !user) {
    return null;
  }

  const allowedLinks = getSidebarItems(user.role);

  return (
    <SidebarProvider>
      <AdminSidebar links={allowedLinks} />

      <SidebarInset className="min-w-0">
        <AdminHeader />

        <main className="flex min-w-0 flex-1 flex-col gap-4 bg-secondary p-4">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;