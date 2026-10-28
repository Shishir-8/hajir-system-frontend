"use client"
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { adminSidebarData } from "@/constants/admin-sidebar-data";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AdminSidebar = () => {
    const pathname = usePathname()
  return (
    <>
      <Sidebar>
        <SidebarHeader className="h-16 mb-2">
          <Link href="/admin/dashboard" className="flex items-center gap-4">
            <div className="flex aspect-square size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <span className="text-lg font-bold">H</span>
            </div>

            <div className="grid min-w-0 flex-1 text-left leading-tight">
              <span className="truncate font-bold">Hajir System</span>
              <span className="truncate text-sm text-muted-foreground">
                Workforce Management
              </span>
            </div>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {adminSidebarData.map((item, id) => {
              const Icon = item.icon;
              const isActive = pathname === item.url
              return (
                <SidebarMenuItem key={id}>
                  <SidebarMenuButton isActive={isActive}>
                    <Link href={item.url} className="flex items-center gap-2 p-2">
                    <Icon size={16} />
                    <span>{item.title}</span>
                  </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter>
          <Button
            variant="ghost"
            className="w-full justify-center gap-2 bg-primary hover:bg-primary hover:text-white text-white cursor-pointer"
          >
            <LogOut className="size-5" />
            <span>Logout</span>
          </Button>
        </SidebarFooter>
      </Sidebar>
    </>
  );
};

export default AdminSidebar;
