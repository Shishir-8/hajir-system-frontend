import z from "zod";

export const leaveSchema = z
  .object({
    leave_type: z.enum(["CASUAL", "SICK", "ANNUAL", "UNPAID"]),
    start_date: z.string().min(1, "Start date is required"),
    end_date: z.string().min(1, "End date is required"),
    reason: z.string().min(10, "Please provide at least 10 characters"),
  })
  .refine((data) => data.end_date >= data.start_date, {
    message: "End date must be after or equal to start date",
    path: ["end_date"],
  });

export type LeaveFormValues = z.infer<typeof leaveSchema>;