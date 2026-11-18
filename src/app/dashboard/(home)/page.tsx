"use client";
import AdminDashboardPage from "./components/admin-dashboard";
import { useAuthStore } from "@/store/auth-store";
import EmployeeDashboardPage from "./components/employee-dashboard";
import { UserRole } from "@/types/role-permission";

const DashboardPage = () => {
  const { user } = useAuthStore();

  return (
    <main>
      {user.role == UserRole.ADMIN ? (
        <AdminDashboardPage />
      ) : (
        <EmployeeDashboardPage />
      )}
    </main>
  );
};

export default DashboardPage;
