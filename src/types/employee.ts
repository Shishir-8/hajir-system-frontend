export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: "ADMIN" | "MANAGER" | "EMPLOYEE";
  status: "ACTIVE" | "INACTIVE";
};