export interface Employee {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  department: number | null;
  designation: string;
  employment_status: "ACTIVE" | "INACTIVE";
  joining_date: string;
  phone_number: string;
  created_at: string;
  updated_at: string;
}

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}


export interface Department {
  id: number;
  name: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}