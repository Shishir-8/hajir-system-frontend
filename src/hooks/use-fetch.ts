import api from "@/services/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export function useFetch<T>(
  key: string[],
  url: string,
  params?: Record<string, unknown>
) {
  return useQuery<T>({
    queryKey: [...key, params],
    queryFn: async () => {
      const res = await api.get<T>(url, { params })
      return res.data
    },

    placeholderData: keepPreviousData
  });
}