'use client'

import { adminStats, employeeStats } from '@/constants/dashboard-stats'
import { useAuthStore } from '@/store/auth-store'
import StatCard from './components/stat-card'

const AdminDashboardPage = () => {
  const {user} = useAuthStore()
  const stats = user?.role == "ADMIN" ? adminStats : employeeStats
  return (
      <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">
          Dashboard
        </h1>
        <p className="text-muted-foreground">
          Welcome back, {user?.first_name}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>
    </div>
  )
}

export default AdminDashboardPage