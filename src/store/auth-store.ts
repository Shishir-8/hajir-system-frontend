import { access } from "fs";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  user: any | null;
  access: string;
  refresh: string;
  role: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  hydrated: boolean;

  setHydrated: (val: boolean) => void;
  setAccess: (val: string) => void;
  setRefresh: (val: string) => void;
  setUser: (user: any) => void;
  setRole: (role: string) => void;
  setLoading: (loading: boolean) => void;
  setIsAuthenticated: (val: boolean) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      role: null,
      access: '',
      refresh: '',
      isAuthenticated: false,
      loading: false,
      hydrated: false,

      setUser: (user) => set({ user }),
      setAccess: (token) => set({access: token}),
      setRefresh: (token) => set({refresh: token}),
      setHydrated: (val) => set({ hydrated: val }),
      setRole: (role) => set({ role }),
      setLoading: (loading) => set({ loading }),
      setIsAuthenticated: (val) => set({ isAuthenticated: val }),
      clearAuth: () => set({ user: null, role: null, access:'', refresh:'', isAuthenticated: false }),
    }),
    {
      name: "auth-storage",
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    },
  ),
);