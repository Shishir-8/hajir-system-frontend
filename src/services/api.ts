
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
  (response) => {
    return response
  },

  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refresh = useAuthStore.getState().refresh;

        // Request a new access token
        const response = await axios.post(
          "http://localhost:8000/api/auth/token/refresh/",
          { refresh }
        );

        const newAccess = response.data.access;

        useAuthStore.getState().setAccess(newAccess);

        // Retry the original request
        originalRequest.headers.Authorization = `Bearer ${newAccess}`;

        return api(originalRequest);

      } catch (refreshError) {
        useAuthStore.getState().clearAuth();
        window.location.href = "/";

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
