import axios from "axios";
import useSWR from "swr";
import type { UserResponse } from "../models/User";

function useFetch<Data = UserResponse>(route: string) {
  const { data, error } = useSWR<Data>(
    route,
    async route => {
      const response = await axios.get(`/api/${route}`);
      return response.data;
    },
    { refreshInterval: 10000 }
  );
  return { data, error };
}

export default useFetch;
