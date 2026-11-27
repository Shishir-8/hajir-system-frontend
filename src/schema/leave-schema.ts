import z from "zod";

export const leaveSchema = z.object({
  leave_type: z.enum(["SICK", "CASUAL", "ANNUAL", "UNPAID"]),
  start_date: z.string().min(1, "Start date is required"),
  number_of_days: z
    .number()
    .int("Number of days must be a whole number")
    .min(1, "At least 1 day is required"),
  reason: z.string().min(10, "Please provide at least 10 characters"),
});

export type LeaveFormValues = z.infer<typeof leaveSchema>;