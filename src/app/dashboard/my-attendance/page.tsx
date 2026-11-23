"use client";

import PageHeader from "@/components/common/header/page-header";
import { GenericTable } from "@/components/common/table/generic-table";
import { myAttendancecolumns } from "./components/my-attendance-columns";
import { useFetch } from "@/hooks/use-fetch";
import { AttendanceRecord } from "@/constants/admin-type";
import AttendanceFilters from "@/components/common/filter/filter";
import TodayAttendance from "./components/today-attendance";

export default function MyAttendancePage() {
  const { data, isPending, error } = useFetch<AttendanceRecord[]>(
    ["attendance"],
    "/attendance/my-attendance/",
  );
  const todayAttendance = data?.[0];
  
  return (
    <main className="space-y-4 p-2">
      <PageHeader
        title="My Attendance"
        subTitle="Track your daily attendance and review your attendance history."
      />

      <TodayAttendance
        item={todayAttendance}
      />
  
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Attendance History</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Review your previous attendance records.
          </p>
        </div>

        <AttendanceFilters
          date=""
          onDateChange={() => {}}
          status="ALL"
          onStatusChange={() => {}}
        />

        <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
          <GenericTable
            columns={myAttendancecolumns}
            data={data ?? []}
            loading={isPending}
            getRowKey={(row) => row.id}
            emptyMessage="No attendance records found."
          />
        </div>
      </section>
    </main>
  );
}
