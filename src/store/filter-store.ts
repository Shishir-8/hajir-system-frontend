import { create } from "zustand"

interface FilterState {
    search: string,
    page: number,

    //actions
    setPage: (page: number) => void
    setSearch: (value: string) => void,
    clearSearch: () => void
}

export const useFilterStore = create<FilterState>((set) => ({
    search:  '',
    page: 1,

    setPage: (page) => set({page}),
    setSearch: (value) => set({search: value, page:1}),
    clearSearch: () => set({search: ''})
}))