import { z } from "zod";

export const employeeSchema = z.object({
  email: z.string().email("Invalid email"),
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  role: z.enum(["EMPLOYEE", "MANAGER"]),
  department: z.string().min(1, "Please select a department"),
  designation: z.string().min(1, "Designation is required"),
  phone_number: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  joining_date: z.string().min(1, "Joining date is required"),
  employment_status: z.enum(["ACTIVE", "INACTIVE"]),
});

export const updateEmployeeSchema = employeeSchema.extend({
  password: z.string().optional(),
});

export type EmployeeFormValues = z.infer<typeof updateEmployeeSchema>;