import axios from "axios";
import type { SkoobResponse, SearchResult } from "../models/SkoobResponse";

const config = {
  headers: {
    Cookie: <string>process.env.SKOOB_AUTH,
  },
};

const skoobSearch = async (query: string) => {
  let response = await axios.get<SearchResult>(`https://www.skoob.com.br/search/v1?q=${query}&limit=5`);
  return response.data.results;
};

const skoobFetch = async (route: string) => {
  try {
    let response = await axios.get<SkoobResponse>(`https://www.skoob.com.br/v1/${route}`, config);
    return response.data.response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export { skoobFetch, skoobSearch };
