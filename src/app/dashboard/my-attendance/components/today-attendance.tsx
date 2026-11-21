
"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CalendarCheck,
  LogIn,
  LogOut,
  Timer,
} from "lucide-react";
import { AttendanceRecord } from "@/constants/admin-type";
import { checkInApi, checkOutApi } from "@/services/attendance-service";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const today = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

interface TodayAttendanceProps {
  item: AttendanceRecord | undefined;
}

const TodayAttendance = ({ item }: TodayAttendanceProps) => {
  const queryClient = useQueryClient();

  const checkInMutation = useMutation({
    mutationFn: checkInApi,
    onSuccess: () => {
      toast.success("Check-In successful!");
      queryClient.invalidateQueries({ queryKey: ["attendance"] });
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Check-In failed!");
    },
  });

  const checkOutMutation = useMutation({
    mutationFn: checkOutApi,
    onSuccess: () => {
      toast.success("Check-Out successful!");
      queryClient.invalidateQueries({ queryKey: ["attendance"] });
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Check-Out failed!");
    },
  });

  const handleAttendance = () => {
    item?.check_in
      ? checkOutMutation.mutate()
      : checkInMutation.mutate();
  };

  const isLoading =
    checkInMutation.isPending || checkOutMutation.isPending;

  return (
    <section className="overflow-hidden rounded-2xl border bg-card shadow-sm">
      <div className="flex flex-col gap-2 border-b p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <CalendarCheck className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Today's Attendance</h2>
          </div>

          <p className="mt-1 text-sm text-muted-foreground">{today}</p>
        </div>

        <Badge
          variant="outline"
          className="w-fit border-blue-200 bg-blue-50 px-3 py-1 text-blue-700"
        >
          <span className="mr-2 h-2 w-2 rounded-full bg-blue-500" />
          {item?.status || "Not Checked In"}
        </Badge>
      </div>

      <div className="grid gap-5 p-5 lg:grid-cols-3">
        {/* Check In */}
        <div className="rounded-xl border bg-muted/30 p-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <LogIn className="h-4 w-4 text-emerald-600" />
            Check In
          </div>

          <p className="mt-3 text-3xl font-semibold">
            {item?.check_in || "--:--"}
          </p>

          <p className="mt-2 text-xs text-muted-foreground">
            {!item?.check_in
              ? "Not checked in yet"
              : item.late_minutes > 0
                ? `Late by ${item.late_minutes} minutes`
                : "On time"}
          </p>
        </div>

        {/* Check Out */}
        <div className="rounded-xl border bg-muted/30 p-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <LogOut className="h-4 w-4 text-orange-600" />
            Check Out
          </div>

          <p className="mt-3 text-3xl font-semibold">
            {item?.check_out || "--:--"}
          </p>

          <p className="mt-2 text-xs text-muted-foreground">
            {item?.check_out
              ? "Checked Out"
              : item?.check_in
                ? "Waiting for check out"
                : "Not checked in yet"}
          </p>
        </div>

        {/* Attendance Action */}
        <div className="flex flex-col justify-between rounded-xl border border-primary/15 bg-primary/[0.04] p-4">
          <div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <Timer className="h-4 w-4 text-primary" />
              Attendance Action
            </div>

            <p className="mt-2 text-sm text-muted-foreground">
              {!item
                ? "Start your working day by checking in."
                : item.check_out
                  ? "Your attendance for today is complete."
                  : "You are currently checked in. Don't forget to check out."}
            </p>
          </div>

          <Button
            onClick={handleAttendance}
            className="mt-5 w-full"
            disabled={isLoading || !!item?.check_out}
          >
            {isLoading ? (
              "Processing..."
            ) : item?.check_in ? (
              item.check_out ? (
                <>
                  <CalendarCheck className="mr-2 h-4 w-4" />
                  Completed
                </>
              ) : (
                <>
                  <LogOut className="mr-2 h-4 w-4" />
                  Check Out
                </>
              )
            ) : (
              <>
                <LogIn className="mr-2 h-4 w-4" />
                Check In
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TodayAttendance;
