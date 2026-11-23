"use client";

import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import {
  CalendarCheck,
  CalendarDays,
  Eye,
  MessageSquareText,
  UserRound,
} from "lucide-react";
import { LeaveRecord } from "@/types/common";

interface LeaveDetailProps {
  leave: LeaveRecord;
}

const LeaveDetail = ({ leave }: LeaveDetailProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="sm"
            className="h-8 text-primary hover:text-primary"
          >
            View details
          </Button>
        }
      />

      <SheetContent className="overflow-y-auto sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Leave Request Details</SheetTitle>
          <SheetDescription>
            Review the employee's leave application.
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-6 px-4">
          {/* Employee Information */}
          <div className="rounded-xl border bg-card p-4">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <UserRound className="size-5" />
              </div>

              <div>
                <p className="text-sm font-semibold">{leave.employee_name}</p>
                <p className="text-xs text-muted-foreground">Employee</p>
              </div>
            </div>

            <div className="flex items-center justify-between border-t pt-3">
              <span className="text-sm text-muted-foreground">Leave Type</span>
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                {leave.leave_type}
              </span>
            </div>
          </div>

          {/* Leave Duration */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Leave Duration</h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border bg-card p-4">
                <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <CalendarDays className="size-5" />
                </div>

                <p className="text-xs text-muted-foreground">Start Date</p>
                <p className="mt-1 text-sm font-semibold">{leave.start_date}</p>
              </div>

              <div className="rounded-xl border bg-card p-4">
                <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                  <CalendarCheck className="size-5" />
                </div>

                <p className="text-xs text-muted-foreground">End Date</p>
                <p className="mt-1 text-sm font-semibold">{leave.end_date}</p>
              </div>
            </div>
          </div>

          {/* Reason */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Reason for Leave</h3>

            <div className="rounded-xl border bg-muted/40 p-4">
              <div className="mb-2 flex items-center gap-2 text-muted-foreground">
                <MessageSquareText className="size-4" />
                <span className="text-xs font-medium">
                  Employee's explanation
                </span>
              </div>

              <p className="text-sm leading-6 text-foreground">
                {leave.reason}
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default LeaveDetail;
