// schema/department-schema.ts

import { z } from "zod";

export const departmentSchema = z.object({
  name: z.string().min(1, "Department name is required"),
  is_active: z.boolean(),
});

export type DepartmentFormValues = z.infer<typeof departmentSchema>;