"use client";

import { useAuthStore } from "@/store/auth-store";
import StatCard from "./components/stat-card";
import { adminStats } from "@/constants/dashboard-stats";
import AttendanceOverview from "./components/attendance";
import RecentAttendance from "./components/recent-attendance";
import PageHeader from "@/components/common/header/page-header";

const AdminDashboardPage = () => {
  const {user} = useAuthStore()

  return (
    <div className="space-y-6 p-2">
      <PageHeader
       title="Dashboard Page"
       subTitle={`Welcome back, ${user?.first_name} 👋`}
       />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {adminStats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <AttendanceOverview />
      <RecentAttendance />
    </div>
  );
};

export default AdminDashboardPage;
