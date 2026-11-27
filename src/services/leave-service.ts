import { LeaveFormValues } from "@/schema/leave-schema"
import api from "./api"


export const applyLeave = async (data: LeaveFormValues) => {
    const res = await api.post('/leaves/apply/', data)
    return res
}

export const deleteLeaves = async (id:number) => {
    const res = await api.delete(`/leaves/${id}/`)
    return res
}

export const approveLeave = async (id: number) => {
  const response = await api.post(`/leaves/approve/${id}/`);
  return response
};

export const rejectLeave = async (id: number) => {
  const response = await api.post(`/leaves/reject/${id}/`);
  return response
};