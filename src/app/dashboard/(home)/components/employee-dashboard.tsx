"use client";

import PageHeader from "@/components/common/header/page-header";
import { useAuthStore } from "@/store/auth-store";
import { employeeStats } from "@/constants/dashboard-data";
import { StatCard } from "@/components/common/admin/stat-card";


const EmployeeDashboardPage = () => {
  const { user } = useAuthStore();

  return (
    <div className="space-y-4 p-2">
      <PageHeader
        title="My Dashboard"
        subTitle={`Welcome back, ${user?.first_name} 👋`}
        showSearch={false}
      />

      {/* Statistics */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {employeeStats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeDashboardPage;