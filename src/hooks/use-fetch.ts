
import api from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export function useFetch<T>(
    key: string,
    url: string,
    params?: object
) {
  return useQuery<T>({
    queryKey: [key, params],
    queryFn: async () => {
      const { data } = await api.get(url, { params });
      return data;
    },
  });
}
