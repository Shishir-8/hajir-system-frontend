
export type LeaveStatus =
  | "PENDING"
  | "APPROVED"
  | "REJECTED"
  | "CANCELLED";

export type LeaveType =
  | "CASUAL"
  | "SICK"
  | "ANNUAL"
  | "UNPAID"
  | "OTHER";

export interface Leave {
  id: number;
  employeeName: string;
  employeeEmail: string;
  department: string;
  leaveType: LeaveType;
  startDate: string;
  endDate: string;
  days: number;
  reason: string;
  status: LeaveStatus;
  appliedOn: string;
}
