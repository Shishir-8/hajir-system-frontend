import { LoginFormValues } from "@/schema/auth-schema"
import { apiBase } from "./api-base"


export const loginUser = async (data:LoginFormValues) => {
    const res = await apiBase.post('auth/login/', data)
    return res
}

export const logoutUser = async (token:string) => {
    const res = await apiBase.post('auth/logout/', {refresh: token})
    return res

}