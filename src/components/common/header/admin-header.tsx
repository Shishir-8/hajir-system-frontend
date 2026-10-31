"use client";

import { Bell, CloudLightning, LogOut, Menu, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { useAuthStore } from "@/store/auth-store";

const AdminHeader = () => {
    const {toggleSidebar} = useSidebar()

    const {user} = useAuthStore()
    console.log(user)

  return (
    <header className="flex h-18 w-full items-center justify-between border-b border-gray-200 bg-white px-4 md:px-6">
      {/* LEFT SIDE */}
      <div className="flex min-w-0 items-center gap-3 md:gap-4">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={toggleSidebar}
          className="shrink-0 cursor-pointer"
          aria-label="Toggle sidebar"
        >
          <Menu className="size-5" />
        </Button>

        <div className="min-w-0">
          <h1 className="truncate text-lg font-bold text-gray-900 md:text-2xl">
            Welcome, {user?.first_name}
          </h1>

          <p className="hidden text-sm text-gray-500 sm:block">
            Manage your workforce efficiently.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex shrink-0 items-center gap-2 md:gap-4">
        {/* Notifications */}
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Notifications"
        >
          <Bell className="size-5" />
        </Button>

        {/* Admin Profile */}
        <div className="hidden items-center gap-2 sm:flex">
          <div className="flex size-9 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
            <UserRound className="size-5" />
          </div>

          <div className="hidden text-left md:block">
            <p className="text-sm font-semibold text-gray-900">
              {user?.first_name} {user?.last_name}
            </p>
            <p className="text-xs text-gray-500">{user?.role}</p>
          </div>
        </div>
   
      </div>
    </header>
  );
};

export default AdminHeader;