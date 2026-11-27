import { create } from "zustand";

interface FilterState {
  search: string;
  page: number;
  // employee filter
  department: string;
  employmentStatus: string;

  //department filter
  departmentStatus: string;

  

  //actions
  setPage: (page: number) => void;
  setDepartment: (value: string) => void;
  setDepartmentStatus: (value: string) => void;
  setEmploymentStatus: (value: string) => void;
  setSearch: (value: string) => void;
  clearSearch: () => void;
  resetEmployeeFilters: () => void;
  resetDepartmentFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  search: "",
  page: 1,
  department: "all",
  employmentStatus: "all",
  departmentStatus: "all",

  setPage: (page) => set({ page }),
  setDepartment: (department) => set({ department, page: 1 }),
  setDepartmentStatus: (departmentStatus) => set({departmentStatus, page:1}),
  setEmploymentStatus: (employmentStatus) => set({ employmentStatus, page: 1 }),
  setSearch: (search) => set({ search, page: 1 }),
  clearSearch: () => set({ search: "" }),
  resetEmployeeFilters: () =>
    set({
      department: "all",
      employmentStatus: "all",
      page: 1,
    }),
    resetDepartmentFilters: () => 
        set({
            departmentStatus: "all",
            page: 1
        })
}));
