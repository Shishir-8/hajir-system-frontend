
"use client";

import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, RotateCcw } from "lucide-react";

interface PageFiltersProps {
  date?: string;
  onDateChange?: (value: string) => void;
  dateType?: "date" | "month";

  children?: ReactNode;

  onReset?: () => void;
  description?: string;
}

export default function PageFilters({
  date,
  onDateChange,
  dateType = "date",
  children,
  onReset,
  description = "Filter records",
}: PageFiltersProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">

      {/* Header */}
      <div className="flex shrink-0 items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted">
          <Filter className="h-4 w-4 text-muted-foreground" />
        </div>

        <div>
          <p className="text-sm font-medium">Filter Records</p>
          <p className="text-xs text-muted-foreground">
            {description}
          </p>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-wrap items-center gap-2">

        {onDateChange && (
          <Input
            type={dateType}
            value={date ?? ""}
            onChange={(e) => onDateChange(e.target.value)}
            className="w-full sm:w-[170px]"
          />
        )}

        {children}

        <Button
          type="button"
          variant="outline"
          onClick={onReset}
          className="shrink-0 gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </Button>

      </div>
    </div>
  );
}
