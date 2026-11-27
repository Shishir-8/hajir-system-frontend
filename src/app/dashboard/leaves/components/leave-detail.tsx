
"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

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
  MessageSquareText,
  UserRound,
  Check,
  X,
} from "lucide-react";

import { LeaveRecord } from "@/types/common";
import { formatDate } from "@/lib/format-date";

import {
  approveLeave,
  rejectLeave,
} from "@/services/leave-service";
import LeaveActionDialog from "@/components/common/modal/leave-modal";


interface LeaveDetailProps {
  leave: LeaveRecord;
}

type ActionType = "approve" | "reject" | null;

const LeaveDetail = ({ leave }: LeaveDetailProps) => {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState<ActionType>(null);

  const queryClient = useQueryClient();

  const approveMutation = useMutation({
    mutationFn: () => approveLeave(leave.id),

    onSuccess: () => {
      toast.success("Leave approved successfully.");

      queryClient.invalidateQueries({ queryKey: ["leaves"] });
      queryClient.invalidateQueries({ queryKey: ["leave-stats"] });
      queryClient.invalidateQueries({ queryKey: ["my-leaves"] });

      setAction(null);
      setOpen(false);
    },

    onError: (error: any) => {
      toast.error(
        error.response?.data?.message || "Failed to approve leave."
      );
    },
  });

  const rejectMutation = useMutation({
    mutationFn: () => rejectLeave(leave.id),

    onSuccess: () => {
      toast.success("Leave rejected successfully.");

      queryClient.invalidateQueries({ queryKey: ["leaves"] });
      queryClient.invalidateQueries({ queryKey: ["leave-stats"] });
      queryClient.invalidateQueries({ queryKey: ["my-leaves"] });

      setAction(null);
      setOpen(false);
    },

    onError: (error: any) => {
      toast.error(
        error.response?.data?.message || "Failed to reject leave."
      );
    },
  });

  const handleConfirm = () => {
    if (action === "approve") {
      approveMutation.mutate();
    }

    if (action === "reject") {
      rejectMutation.mutate();
    }
  };

  const isProcessing =
    approveMutation.isPending || rejectMutation.isPending;

  const statusStyles = {
    PENDING: "bg-amber-100 text-amber-700",
    APPROVED: "bg-green-100 text-green-700",
    REJECTED: "bg-red-100 text-red-700",
    CANCELLED: "bg-gray-100 text-gray-700",
  };

  return (
    <>
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

          <div className="space-y-6 px-4 pb-6">
            {/* Employee Information */}
            <div className="rounded-xl border bg-card p-4">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                  <UserRound className="size-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    {leave.employee_name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Employee
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between border-t pt-3">
                <span className="text-sm text-muted-foreground">
                  Leave Type
                </span>

                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                  {leave.leave_type}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between border-t pt-3">
                <span className="text-sm text-muted-foreground">
                  Status
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    statusStyles[leave.status]
                  }`}
                >
                  {leave.status}
                </span>
              </div>
            </div>

            {/* Leave Duration */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold">
                Leave Duration
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border bg-card p-4">
                  <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <CalendarDays className="size-5" />
                  </div>

                  <p className="text-xs text-muted-foreground">
                    From Date
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    {formatDate(leave.start_date)}
                  </p>
                </div>

                <div className="rounded-xl border bg-card p-4">
                  <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                    <CalendarCheck className="size-5" />
                  </div>

                  <p className="text-xs text-muted-foreground">
                    To Date
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    {formatDate(leave.end_date)}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg border bg-muted/40 p-3">
                <span className="text-sm text-muted-foreground">
                  Total Duration
                </span>

                <span className="text-sm font-semibold">
                  {leave.number_of_days}{" "}
                  {leave.number_of_days === 1 ? "Day" : "Days"}
                </span>
              </div>
            </div>

            {/* Reason */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold">
                Reason for Leave
              </h3>

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

            {/* Approval Actions */}
            {leave.status === "PENDING" && (
              <div className="space-y-3 border-t pt-5">
                <h3 className="text-sm font-semibold">
                  Review Application
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  <Button
                    className="bg-green-600 text-white hover:bg-green-700"
                    disabled={isProcessing}
                    onClick={() => setAction("approve")}
                  >
                    <Check className="mr-2 size-4" />
                    Approve
                  </Button>

                  <Button
                    variant="destructive"
                    disabled={isProcessing}
                    onClick={() => setAction("reject")}
                  >
                    <X className="mr-2 size-4" />
                    Reject
                  </Button>
                </div>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>


      <LeaveActionDialog
        open={action !== null}
        action={action}
        employeeName={leave.employee_name}
        loading={isProcessing}
        onOpenChange={(value) => {
          if (!value && !isProcessing) {
            setAction(null);
          }
        }}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default LeaveDetail;
