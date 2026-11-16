
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";

import { SidebarGroup as SidebarGroupType } from "@/constants/sidebar-data";
import LogoutModal from "../modal/logout-modal";

interface SidebarProps {
  links: SidebarGroupType[];
}

const DashboardSidebar = ({ links }: SidebarProps) => {
  const pathname = usePathname();
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  return (
    <>
      <Sidebar>
        <SidebarHeader>
          <Link href="/dashboard" className="flex items-center gap-4">
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
          {links.map((group) => (
            <SidebarGroup key={group.title}>
              <SidebarGroupLabel>
                {group.title}
              </SidebarGroupLabel>

              <SidebarMenu>
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.url;

                  return (
                    <SidebarMenuItem key={item.url}>
                      <SidebarMenuButton
                        render={<Link href={item.url} />}
                        isActive={isActive}
                      >
                        <Icon />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroup>
          ))}
        </SidebarContent>

        <SidebarRail />

        <SidebarFooter>
          <Button
            type="button"
            onClick={() => setOpenLogoutModal(true)}
            variant="ghost"
            className="w-full justify-center cursor-pointer gap-2 bg-primary text-white hover:bg-primary hover:text-white"
          >
            <LogOut className="size-5" />
            <span>Logout</span>
          </Button>
        </SidebarFooter>
      </Sidebar>

      <LogoutModal
        open={openLogoutModal}
        setOpen={setOpenLogoutModal}
      />
    </>
  );
};

export default DashboardSidebar;
