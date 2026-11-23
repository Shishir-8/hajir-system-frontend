"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

import { leaveSchema, type LeaveFormValues } from "@/schema/leave-schema";
import { applyLeave } from "@/services/leave-service";


const items = [
  { label: "Select a value", value: null },
  { label: "Sick Leave", value: "SICK" },
  { label: "Casual Leave", value: "CASUAL" },
  { label: "Annual Leave", value: "ANNUAL" },
  { label: "Unpaid Leave", value: "UNPAID" },
];

const LeaveForm = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const form = useForm<LeaveFormValues>({
    resolver: zodResolver(leaveSchema),
    defaultValues: {
      leave_type: undefined,
      start_date: "",
      end_date: "",
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

              <Select items={items}>
                <SelectTrigger>
                  <SelectValue/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {items.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Start Date and End Date */}
        <div className="grid gap-5 sm:grid-cols-2">
          <Controller
            name="start_date"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Leave Start Date</FieldLabel>

                <Input
                  {...field}
                  id={field.name}
                  type="date"
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="end_date"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Leave End Date</FieldLabel>

                <Input
                  {...field}
                  id={field.name}
                  type="date"
                  min={form.watch("start_date") || undefined}
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
