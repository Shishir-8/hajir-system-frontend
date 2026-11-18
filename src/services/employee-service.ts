
import { EmployeeFormValues } from "@/schema/employee-schema";
import api from "./api";


export const createEmployee = (data: EmployeeFormValues) => {
  const res = api.post("/employees/", data);
  return res
};

export const updateEmployee = (id:number, data: EmployeeFormValues) => {
  const res = api.patch(`/employees/${id}/`, data)
  return res
}

export const deleteEmployee = async (id:number) => {
  const res = await api.delete(`/employees/${id}/`)
  return res
}
