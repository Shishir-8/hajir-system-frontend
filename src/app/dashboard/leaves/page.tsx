"use client";

import PageHeader from "@/components/common/header/page-header";
import { LeaveStats } from "./components/leave-stats";
import { useFetch } from "@/hooks/use-fetch";
import { GenericTable } from "@/components/common/table/generic-table";
import { ApiListResponse, LeaveRecord } from "@/types/common";
import { leaveColumns } from "./components/leave-columns";
import LeaveFilters from "./components/leave-filter";

const LeavePage = () => {
  const { data, isPending, error } = useFetch<ApiListResponse<LeaveRecord>>(
    ["leaves"],
    "/leaves/",
  );
  console.log(data);

  return (
    <main className="space-y-4 p-2">
      <PageHeader
        title="Leave Management"
        subTitle="Manage employee leave requests, approvals, and leave records."
      />

      <LeaveStats />

      <LeaveFilters />


      {error ? (
        <h1 className="text-center">Failed to load leaves {error?.message}</h1>
      ) : (
        <>
          <GenericTable
            columns={leaveColumns}
            data={data?.results ?? []}
            loading={isPending}
            getRowKey={(employee) => employee.id}
            emptyMessage="No Leaves found."
            selectable
          />
        </>
      )}
    </main>
  );
};

export default LeavePage;
