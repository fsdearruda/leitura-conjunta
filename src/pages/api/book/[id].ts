import { getBook } from "../../../utils/skoobTools";
import type { NextApiRequest, NextApiResponse } from "next";
import type Book from "../../../models/Book";

type ErrorMessage = {
  error: boolean;
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Book | ErrorMessage>) {
  if (req.method !== "GET") return res.status(405).json({ error: true, message: "Method not allowed" });
  const book = await getBook(<string>req.query.id);
  if (!book) return res.status(404).json({ error: true, message: "Book not found" });
  return res.status(200).json(book);
}
