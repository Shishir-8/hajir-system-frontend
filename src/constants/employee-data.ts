import { Employee } from "@/types/employee";

export const employees: Employee[] = [
  {
    id: 1,
    first_name: "John",
    last_name: "Doe",
    email: "john@example.com",
    role: "ADMIN",
    status: "ACTIVE",
  },
  {
    id: 2,
    first_name: "Jane",
    last_name: "Smith",
    email: "jane@example.com",
    role: "EMPLOYEE",
    status: "ACTIVE",
  },
  {
    id: 3,
    first_name: "Robert",
    last_name: "Brown",
    email: "robert@example.com",
    role: "MANAGER",
    status: "INACTIVE",
  },
];