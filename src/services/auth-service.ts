import { LoginFormValues } from "@/schema/auth-schema";
import { apiBase } from "./api-base";

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

export const forgotPassword = async (email: string) => {
  const res = await apiBase.post("auth/forgot-password/", { email });
  return res;
};

export const resetPassword = async (
  uid: string | null,
  token: string | null,
  new_password: string,
  confirm_password: string,
) => {
  const res = await apiBase.post("auth/reset-password/", {
    uid,
    token,
    new_password,
    confirm_password,
  });

  return res;
};
