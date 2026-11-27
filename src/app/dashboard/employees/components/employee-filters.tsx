"use client";

import { ChevronDown } from "lucide-react";
import PageFilters from "@/components/common/filter/page-filter";

interface Props {
  department: string;
  onDepartmentChange: (value: string) => void;
  employmentStatus: string;
  onEmploymentStatusChange: (value: string) => void;
  departments: { id: number; name: string }[];
  onReset: () => void;
}

const selectClassName =
  "h-10 w-full appearance-none rounded-lg border border-border bg-background px-3 pr-9 text-sm text-foreground outline-none transition-colors hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/15 sm:w-[180px]";

export default function EmployeeFilters({
  department,
  onDepartmentChange,
  employmentStatus,
  onEmploymentStatusChange,
  departments,
  onReset,
}: Props) {
  return (
    <PageFilters
      description="Filter employees by department and status"
      onReset={onReset}
    >
      <div className="relative">
        <select
          value={department}
          onChange={(e) => onDepartmentChange(e.target.value)}
          className={selectClassName}
        >
          <option value="all">All Departments</option>
          {departments.map((item) => (
            <option key={item.id} value={String(item.id)}>
              {item.name}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      </div>

      <div className="relative">
        <select
          value={employmentStatus}
          onChange={(e) => onEmploymentStatusChange(e.target.value)}
          className={selectClassName}
        >
          <option value="all">All Status</option>
          <option value="ACTIVE">Active</option>
          <option value="INACTIVE">Inactive</option>
          <option value="TERMINATED">Terminated</option>
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      </div>
    </PageFilters>
  );
}
