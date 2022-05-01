import { skoobSearch, getBook } from "../../../utils/skoobTools";
import type { NextApiRequest, NextApiResponse } from "next";
import type Book from "../../../models/Book";

type ErrorMessage = {
  error: boolean;
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Book[] | ErrorMessage>) {
  if (req.method !== "GET") return res.status(405).json({ error: true, message: "Method not allowed" });
  const query = encodeURI(<string>req.query.bookTitle) ?? "";
  if (!query) return res.status(400).json({ error: true, message: "Book title is required" });
  try {
    let response = await skoobSearch(query);
    if (response.length === 0) return res.status(404).json({ error: true, message: "Book not found" });
    response = await Promise.all(
      response.map(async book => {
        return await getBook(book.id);
      })
    );
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: true, message: "Internal server error" });
  }
}
