
export interface PaginatedResponse<T> {
  count: number;
  current_page: number;
  total_pages: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface ApiListResponse<T> {
  message: string;
  results: T[];
}

export interface LeaveRecord {
  id: number;
  employee: number;
  employee_name: string;
  leave_type: "SICK" | "CASUAL" | "ANNUAL";
  start_date: string;
  end_date: string;
  number_of_days: number;
  reason: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  reviewed_by: number | null;
  reviewed_at: string | null;
  created_at: string;
}




