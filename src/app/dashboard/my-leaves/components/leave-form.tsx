"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

import { leaveSchema, type LeaveFormValues } from "@/schema/leave-schema";
import { applyLeave } from "@/services/leave-service";


const LeaveForm = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const form = useForm<LeaveFormValues>({
    resolver: zodResolver(leaveSchema),
    defaultValues: {
      leave_type: undefined,
      start_date: "",
      number_of_days: 1,
      reason: "",
    },
  });

  const mutation = useMutation({
    mutationFn: applyLeave,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["my-leaves"] });
      queryClient.invalidateQueries({ queryKey: ["leaves"] });

      toast.success("Leave application submitted successfully!");
      form.reset();
      router.push("/dashboard/my-leaves");
    },

    onError: () => {
      toast.error("Failed to submit leave application.");
    },
  });

  const onSubmit = (values: LeaveFormValues) => {
    mutation.mutate(values);
  };

  return (
    <div className="rounded-xl border bg-card p-4 md:p-6">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Leave Type */}
        <Controller
          name="leave_type"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Leave Type</FieldLabel>
              <select
                {...field}
                id={field.name}
                className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm  outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-invalid={fieldState.invalid}
              >
                <option value="">Select leave type</option>
                <option value="SICK">Sick Leave</option>
                <option value="CASUAL">Casual Leave</option>
                <option value="ANNUAL">Annual Leave</option>
                <option value="UNPAID">Unpaid Leave</option>
              </select>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Start Date and Number of Days */}
        <div className="grid gap-5 sm:grid-cols-2">
          <Controller
            name="start_date"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Leave Date</FieldLabel>

                <Input
                  {...field}
                  id={field.name}
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="number_of_days"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Number of Days</FieldLabel>

                <Input
                  id={field.name}
                  type="number"
                  min={1}
                  step={1}
                  placeholder="Enter number of days"
                  value={field.value}
                  onChange={(event) =>
                    field.onChange(
                      event.target.value === ""
                        ? undefined
                        : Number(event.target.value),
                    )
                  }
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        {/* Reason */}
        <Controller
          name="reason"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Reason for Leave</FieldLabel>

              <Textarea
                {...field}
                id={field.name}
                placeholder="Explain the reason for your leave..."
                className="min-h-32 resize-y"
                aria-invalid={fieldState.invalid}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-5">
          <Button
            type="button"
            variant="outline"
            disabled={mutation.isPending}
            onClick={() => router.back()}
          >
            Cancel
          </Button>

          <Button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? (
              <>
                <Spinner />
                Submitting...
              </>
            ) : (
              "Apply Leave"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LeaveForm;
