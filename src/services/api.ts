
import { useAuthStore } from "@/store/auth-store";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/",
});

// Request interceptor
api.interceptors.request.use((config) => {
  const { access } = useAuthStore.getState();

  if (access) {
    config.headers.Authorization = `Bearer ${access}`;
  }

  return config;
});

// Response interceptor
api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refresh = useAuthStore.getState().refresh;

        if (!refresh) {
          throw new Error("Refresh token not found");
        }

        const response = await axios.post(
          "http://localhost:8000/api/auth/refresh/",
          { refresh }
        );

        const newAccess = response.data.access;

        // Save new access token
        useAuthStore.getState().setAccess(newAccess);

        // Retry original request
        originalRequest.headers.Authorization = `Bearer ${newAccess}`;

        return api(originalRequest);

      } catch (refreshError) {

        // Refresh failed, logout user
        useAuthStore.getState().clearAuth();

        window.location.href = "/";

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
