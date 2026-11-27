"use client";

import { ChevronDown } from "lucide-react";
import PageFilters from "@/components/common/filter/page-filter";

interface Props {
  onReset: () => void;
  departmentStatus: string;
  onStatusChange: (value: string) => void
}

const selectClassName =
  "h-10 w-full appearance-none rounded-lg border border-border bg-background px-3 pr-9 text-sm text-foreground outline-none transition-colors hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/15 sm:w-[180px]";

export default function EmployeeFilters({
departmentStatus,
onStatusChange,
  onReset,
}: Props) {
  return (
    <PageFilters
      description="Filter department by status"
      onReset={onReset}
    >

      <div className="relative">
        <select
        value={departmentStatus}
        onChange={(e) => onStatusChange(e.target.value)}
          className={selectClassName}
        >
          <option value="all">All Status</option>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      </div>
    </PageFilters>
  );
}
