"use client";

import PageHeader from "@/components/common/header/page-header";
import { adminStats } from "@/constants/dashboard-data";
import { useAuthStore } from "@/store/auth-store";
import AttendanceTrends from "@/components/common/admin/attendance";
import AttendanceDistribution from "@/components/common/admin/attendance-distribution";
import { RecentEmployees } from "@/components/common/admin/recent-employee";
import { StatCard } from "@/components/common/admin/stat-card";



const AdminDashboardPage = () => {
  const { user } = useAuthStore();

  return (
    <div className="space-y-4 p-2">
      <PageHeader
        title="Dashboard Page"
        subTitle={`Welcome back, ${user?.first_name} 👋`}
        showSearch={false}
      />

      {/* Statistics */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {adminStats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <AttendanceTrends />
        </div>

        <div className="lg:col-span-1">
          <AttendanceDistribution />
        </div>
      </div>

      <RecentEmployees />
    </div>
  );
};

export default AdminDashboardPage;