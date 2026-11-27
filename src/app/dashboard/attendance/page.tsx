"use client";

import PageHeader from "@/components/common/header/page-header";
import { GenericTable } from "@/components/common/table/generic-table";
import { attendanceColumns } from "./components/attendance-columns";
import { useFetch } from "@/hooks/use-fetch";
import { PaginatedResponse } from "@/types/common";
import { AttendanceRecord } from "@/constants/admin-type";
import { AttendanceStats } from "./components/attendance-stats";
import AttendanceFilters from "./components/attendance-filters";

export default function AttendancePage() {
  const { data, isPending, error } = useFetch<
    PaginatedResponse<AttendanceRecord>
  >(["attendance"], "/attendance/");

  return (
    <main className="space-y-4 p-2">
      <PageHeader
        title="Attendance Management"
        subTitle="Monitor and manage employee attendance records."
        url="/dashboard/attendance/create"
        buttonTitle="Add Attendance"
      />

      <AttendanceStats present={216} absent={12} late={8} onLeave={12} />
      <AttendanceFilters />

      {error ? (
        <h1 className="text-center">
          Failed to load attendance records. {error.message}
        </h1>
      ) : (
        <GenericTable
          columns={attendanceColumns}
          data={data?.results ?? []}
          loading={isPending}
          getRowKey={(row: AttendanceRecord) => row.id}
          emptyMessage="No attendance records found."
        />
      )}
    </main>
  );
}
