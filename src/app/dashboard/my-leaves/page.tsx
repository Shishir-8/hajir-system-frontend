"use client";

import PageHeader from "@/components/common/header/page-header";
import { GenericTable } from "@/components/common/table/generic-table";
import { useFetch } from "@/hooks/use-fetch";
import { ApiListResponse, LeaveRecord } from "@/types/common";

import { MyLeaveStats } from "./components/my-leave-stats";
import { myLeaveColumns } from "./components/my-leave-columns";

export default function MyLeavesPage() {
  const { data, isPending, error } = useFetch<ApiListResponse<LeaveRecord>>(
    ["my-leaves"],
    "/leaves/my-leaves/",
  );

  return (
    <main className="space-y-4 p-2">
      <PageHeader
        title="My Leaves"
        subTitle="Apply & track the status of your leave requests."
        url="/dashboard/my-leaves/apply-leave/"
        buttonTitle="Apply Leave"
      />

      <MyLeaveStats leaves={data?.results ?? []} />

      <section className="space-y-4">
        <div>
          <h2 className="text-base font-semibold tracking-tight">
            Leave History
          </h2>
          <p className="text-sm text-muted-foreground">
            View your previous and current leave requests.
          </p>
        </div>

          <GenericTable
            columns={myLeaveColumns}
            data={data?.results ?? []}
            loading={isPending}
            getRowKey={(row) => row.id}
            emptyMessage="You haven't submitted any leave requests yet."
          />

      </section>
    </main>
  );
}
