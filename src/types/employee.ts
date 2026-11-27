export interface Employee {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  role: "EMPLOYEE" | "MANAGER";
  department: string;
  designation: string;
  employment_status: "ACTIVE" | "INACTIVE" | "TERMINATED" | undefined;
  joining_date: string;
  phone_number: string;
  created_at: string;
  updated_at: string;
}

export interface Department {
  id: number;
  name: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Attendance {
  
}