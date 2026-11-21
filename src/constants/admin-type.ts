
export type AttendanceStatus =
  | "PRESENT"
  | "LATE"
  | "ABSENT"
  | "ON_LEAVE"
  | "HOLIDAY"
  | "IN_PROGRESS";

export type WorkingDayType = "FULL_DAY" | "HALF_DAY" | null;

export interface AttendanceRecord {
  id: number;
  employee_name: string;
  employee: number;
  department: string;
  date: string;
  check_in: string | null;
  check_out: string | null;
  working_duration: string | null;
  late_minutes: number;
  working_day_type: WorkingDayType;
  status: AttendanceStatus;
}

export interface MyProfile {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: "ADMIN" | "MANAGER" | "EMPLOYEE";
  is_active: boolean;
  date_joined: string;
  phone_number: string;
  address: string;
  department: string | null;
  designation: string | null;
  joining_date: string | null;
  employment_status: "ACTIVE" | "INACTIVE" | "TERMINATED" | null;
}

