
"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

import {
  employeeSchema,
  updateEmployeeSchema,
  type EmployeeFormValues,
} from "@/schema/employee-schema";

import {
  createEmployee,
  updateEmployee,
} from "@/services/employee-service";

import { useFetch } from "@/hooks/use-fetch";
import type { Department, Employee } from "@/types/employee";
import type { PaginatedResponse } from "@/types/common";

interface EmployeeFormProps {
  initialData?: Employee;
}

export default function EmployeeForm({ initialData }: EmployeeFormProps) {
  const router = useRouter();
  const queryClient = useQueryClient();

  // Fetch departments
  const {
    data,
    isPending: isDepartmentsLoading,
    isError: isDepartmentsError,
  } = useFetch<PaginatedResponse<Department>>(
    ["departments"],
    "/departments"
  );

  const departments = data?.results ?? [];

  // Form
  const form = useForm<EmployeeFormValues>({
    resolver: zodResolver(
      initialData ? updateEmployeeSchema : employeeSchema
    ),
    defaultValues: {
      email: initialData?.email ?? "",
      first_name: initialData?.first_name ?? "",
      last_name: initialData?.last_name ?? "",
      password: "",
      role: initialData?.role ?? "EMPLOYEE",
      department: initialData?.department ?? "",
      designation: initialData?.designation ?? "",
      phone_number: initialData?.phone_number ?? "",
      address: initialData?.address ?? "",
      joining_date: initialData?.joining_date ?? "",
      employment_status: initialData?.employment_status ?? undefined,
    },
  });

  // Create and update
  const mutation = useMutation({
    mutationFn: (values: EmployeeFormValues) => {
      if (initialData) {
        const { password, ...updateData } = values;
        return updateEmployee(initialData.id, updateData);
      }

      return createEmployee(values);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });

      if (initialData) {
        queryClient.invalidateQueries({
          queryKey: ["employee", String(initialData.id)],
        });
      }

      toast.success(
        initialData
          ? "Employee updated successfully!"
          : "Employee created successfully!"
      );

      router.push("/dashboard/employees");
    },

    onError: (error) => {
      toast.error(error?.message || "Failed to save employees!")
    },
  });

  const onSubmit = (values: EmployeeFormValues) => {
    mutation.mutate(values);
  };

  return (
    <div className="rounded-xl bg-white p-2 md:p-4">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">

          {/* First Name */}
          <Controller
            name="first_name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>First Name</FieldLabel>
                <Input {...field} placeholder="Enter first name" />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Last Name */}
          <Controller
            name="last_name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Last Name</FieldLabel>
                <Input {...field} placeholder="Enter last name" />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Email */}
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Email Address</FieldLabel>
                <Input
                  {...field}
                  type="email"
                  placeholder="you@gmail.com"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Password - Create only */}
          {!initialData && (
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Password</FieldLabel>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Enter password"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          )}

          {/* Role */}
          <Controller
            name="role"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Role</FieldLabel>
                <select
                  {...field}
                  className="h-9 w-full rounded-md border bg-background px-3 text-sm"
                >
                  <option value="EMPLOYEE">Employee</option>
                  <option value="MANAGER">Manager</option>
                </select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Department */}
          <Controller
            name="department"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Department</FieldLabel>
                <select
                  {...field}
                  value={field.value ?? ""}
                  disabled={isDepartmentsLoading || isDepartmentsError}
                  className="h-9 w-full rounded-md border bg-background px-3 text-sm"
                >
                  <option value="">
                    {isDepartmentsLoading
                      ? "Loading departments..."
                      : "Select department"}
                  </option>

                  {departments.map((department) => (
                    <option
                      key={department.id}
                      value={department.name}
                    >
                      {department.name}
                    </option>
                  ))}
                </select>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}

                {isDepartmentsError && (
                  <p className="text-sm text-destructive">
                    Failed to load departments.
                  </p>
                )}
              </Field>
            )}
          />

          {/* Designation */}
          <Controller
            name="designation"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Designation</FieldLabel>
                <Input {...field} placeholder="Frontend Developer" />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Phone Number */}
          <Controller
            name="phone_number"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Phone Number</FieldLabel>
                <Input {...field} type="tel" placeholder="9800000004" />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Joining Date */}
          <Controller
            name="joining_date"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Joining Date</FieldLabel>
                <Input {...field} type="date" />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Employment Status */}
          <Controller
            name="employment_status"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Employment Status</FieldLabel>
                <select
                  {...field}
                  className="h-9 w-full rounded-md border bg-background px-3 text-sm"
                >
                  <option value="">All Status</option>
                  <option value="ACTIVE">Active</option>
                  <option value="INACTIVE">Inactive</option>
                  <option value="TERMINATED">Terminated</option>
                </select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Address */}
          <Controller
            name="address"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                className="md:col-span-2"
              >
                <FieldLabel>Address</FieldLabel>
                <Input {...field} placeholder="Chitwan, Nepal" />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-end gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
            disabled={mutation.isPending}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            className={"hover:bg-primary-dark"}
            disabled={
              mutation.isPending ||
              isDepartmentsLoading ||
              isDepartmentsError
            }
          >
            {mutation.isPending ? (
              <Spinner />
            ) : initialData ? (
              "Update Employee"
            ) : (
              "Create Employee"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
