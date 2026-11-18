import { DepartmentFormValues } from "@/schema/department-schema"
import api from "./api"

export const createDepartment = async (data: DepartmentFormValues) => {
    const res = await api.post('/departments/', data)
    return res
}

export const updateDepartment = async (id:number, data:DepartmentFormValues) => {
    const res = await api.patch(`/departments/${id}/`, data)
    return res
}


export const deleteDepartment = async (id:number) => {
    const res = await api.delete(`/departments/${id}/`)
    return res
}