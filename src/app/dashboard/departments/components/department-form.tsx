
"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { departmentSchema, type DepartmentFormValues } from "@/schema/department-schema";

import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import toast from "react-hot-toast";
import { createDepartment, updateDepartment } from "@/services/department-service";
import { useRouter } from "next/navigation";
import { Department } from "@/types/employee";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEmployee } from "@/services/employee-service";

interface DepartmentFormProps {
  initialData?: Department
}

const DepartmentForm = ({ initialData }: DepartmentFormProps) => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const form = useForm<DepartmentFormValues>({
    resolver: zodResolver(departmentSchema),
    defaultValues: {
      name: initialData?.name ?? '',
      is_active: initialData?.is_active ?? true,
    },
  });

  const mutation = useMutation({
    mutationFn: (values: DepartmentFormValues) => {
      if (initialData) {
        return updateDepartment(initialData.id, values)
      }
      return createDepartment(values)
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["departments"] });

      toast.success(
        initialData
          ? "Department updated successfully!"
          : "Department created succesfully!"
      );

      router.push("/dashboard/departments");
    },

    onError: () => {
      toast.error(
        initialData
          ? "Failed to update department."
          : "Failed to create department."
      );
    },
  });

  const onSubmit = (values: DepartmentFormValues) => {
    mutation.mutate(values)
  }

  return (
    <div className="rounded-xl bg-white p-4 md:p-6">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

        {/* Department Name */}
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>
                Department Name
              </FieldLabel>

              <Input
                {...field}
                id={field.name}
                placeholder="Enter department name"
                aria-invalid={fieldState.invalid}
              />

              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        {/* Active Status */}
        <Controller
          name="is_active"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field
              orientation="horizontal"
              data-invalid={fieldState.invalid}
              className="flex items-center justify-between rounded-lg border p-4"
            >
              <FieldLabel htmlFor={field.name}>
                Active Department
              </FieldLabel>

              <Switch
                id={field.name}
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </Field>
          )}
        />

        <div className="flex justify-end">
          <Button
            disabled={mutation.isPending}
            type="submit">
             {mutation.isPending ? (
              <Spinner />
            ) : initialData ? (
              "Update Department"
            ) : (
              "Create Department"
            )}
          </Button>
        </div>

      </form>
    </div>
  );
};

export default DepartmentForm;
