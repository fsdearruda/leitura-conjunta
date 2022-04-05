import { skoobFetch } from "../../../utils/skoobTools";
import type { NextApiRequest, NextApiResponse } from "next";
import type Book from "../../../models/Book";

const getBook = async (bookID: string): Promise<Book> => {
  let response = await skoobFetch(`book/${bookID}`);
  const { id, livro_id, titulo, subtitulo, ano, paginas, autor, sinopse, editora, leitores, capa_grande } = response;
  return { id, livro_id, titulo, subtitulo, ano, paginas, autor, sinopse, editora, leitores, capa: capa_grande };
};

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
