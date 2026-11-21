
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarDays, Filter, RotateCcw, Search } from "lucide-react";

interface Props {
  date: string;
  onDateChange: (value: string) => void;
  status: string;
  onStatusChange: (value: string) => void;
}

export default function AttendanceFilters({
  date,
  onDateChange,
  status,
  onStatusChange,
}: Props) {
  return (
      <div className="flex flex-col gap-3 rounded-xl border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted">
              <Filter className="h-4 w-4 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium">Filter Records</p>
              <p className="text-xs text-muted-foreground">
                Narrow down your attendance history
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <Input
              type="month"
              className="w-full sm:w-[190px]"
            />

            <Button variant="outline" className="gap-2">
              <RotateCcw className="h-4 w-4" />
              Reset
            </Button>
          </div>
        </div>
  );
}
