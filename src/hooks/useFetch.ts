import axios from "axios";
import useSWR from "swr";
import type { UserResponse } from "../models/User";
import type Review from "../models/Review";

function useFetch<Data = UserResponse | Review[]>(route: string, refreshInterval?: number) {
  const { data, error } = useSWR<Data>(
    route,
    async route => {
      const response = await axios.get(`/api/${route}`);
      return response.data;
    },
    refreshInterval ? { refreshInterval } : {}
  );
  return { data, error };
}

export default useFetch;
