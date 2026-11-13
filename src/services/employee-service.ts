import { api } from "./api"



export const getAllEmployees = async () => {
    const res = await api.get('/employees/')
    return res
}