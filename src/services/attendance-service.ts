import api from "./api"


export const deleteAttendance = async (id:number) => {
    const res = await api.delete(`/attendance/${id}`)
    return res
}

export const checkInApi = async () => {
    const res = await api.post('/attendance/check-in/')
    return res
}

export const checkOutApi = async () => {
    const res = await api.post('/attendance/check-out/')
    return res
}