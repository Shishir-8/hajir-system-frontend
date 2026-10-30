"use client";
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
import { sidebarData } from "@/constants/sidebar-data";
import { SidebarItem } from "@/types/sidebar";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  links: SidebarItem[]
}

const AdminSidebar = ({links}: SidebarProps) => {
  const pathname = usePathname();
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
            {links.map((item, id) => {
              const Icon = item.icon;
              const isActive = pathname === item.url;
              return (
                <SidebarMenuItem key={id}>
                  <SidebarMenuButton render={<Link href={item.url} />} isActive={isActive}>
                    <Icon />
                    <span>{item.title}</span>
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
