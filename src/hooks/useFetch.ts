import axios from "axios";
import useSWR from "swr";

function useFetch<Data = any>(route: string) {
  const { data, error } = useSWR<Data>(route, async route => {
    const response = await axios.get(`/api/${route}`);
    return response.data;
  });
  return { data, error };
}

export default useFetch;
