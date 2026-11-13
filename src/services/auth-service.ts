import { LoginFormValues } from "@/schema/auth-schema";
import { apiBase } from "./api-base";
import axios from "axios";

export const loginUser = async (data: LoginFormValues) => {
  const res = await apiBase.post("auth/login/", data);
  return res;
};

export const logoutUser = async (token: string, accessToken: string) => {
  const res = await apiBase.post(
    "auth/logout/",
    { refresh: token },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
  return res;
};
