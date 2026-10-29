import { LucideIcon } from "lucide-react";

export type UserRole = "ADMIN" | "MANAGER" | "EMPLOYEE"

export type SidebarItem = {
  title: string;
  url: string;
  icon: LucideIcon;
  role: UserRole[],
};