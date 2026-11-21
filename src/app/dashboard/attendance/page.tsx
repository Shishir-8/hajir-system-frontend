"use client";

import PageHeader from "@/components/common/header/page-header";
import { GenericTable } from "@/components/common/table/generic-table";
import { attendanceColumns } from "./components/attendance-columns";
import { useFetch } from "@/hooks/use-fetch";
import { PaginatedResponse } from "@/types/common";
import { AttendanceRecord } from "@/constants/admin-type";
import AttendanceFilters from "@/components/common/filter/filter";

export default function AttendancePage() {
  const { data, isPending, error } = useFetch<PaginatedResponse<AttendanceRecord>>(["attendance"], "/attendance/");

  return (
    <main className="space-y-4 p-2">
      <PageHeader
        title="Attendance"
        subTitle="Monitor and manage employee attendance records."
        url="/dashboard/attendance/create"
        buttonTitle="Add Attendance"
        showSearch={true}
      />

      <AttendanceFilters
        date=""
        onDateChange={() => {}}
        status="ALL"
        onStatusChange={() => {}}
      />

      {error ? (
        <h1 className="text-center">
          Failed to load employees. {error.message}
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
