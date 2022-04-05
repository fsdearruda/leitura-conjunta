import type Book from "../models/Book";

type SkoobResponse = {
  success: boolean;
  response: any;
  logged_id?: number;
  modified?: string;
};

type SearchResult = {
  results: Book[];
};

export { SkoobResponse, SearchResult };
