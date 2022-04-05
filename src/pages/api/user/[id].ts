import type { NextApiRequest, NextApiResponse } from "next";
import { skoobFetch } from "../../../utils/skoobTools";
import type { User } from "../../../models/User";

const getUserPages = async (userID: string) => {
  let totalPages = 0;
  let response = await skoobFetch(`bookcase/books/${userID}/shelf_id:0/limit:1000000`);
  response.forEach((book: any) => {
    if (book.id === 7123) {
      totalPages += book.paginas_lidas;
    }
  });
  return totalPages;
};

const getUser = async (userID: string): Promise<User> => {
  const userPages = await getUserPages(userID);
  let response = await skoobFetch(`user/${userID}`);
  const { id, nome, apelido, foto, skoob, following, friends } = response;
  return { id, nome, apelido, skoob, foto, following, friends, pages: userPages };
};

type ErrorMessage = {
  error: boolean;
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<User | ErrorMessage>) {
  if (req.method !== "GET") return res.status(405).json({ error: true, message: "Method not allowed" });
  const user = await getUser(<string>req.query.id);
  if (!user) return res.status(404).json({ error: true, message: "User not found" });
  return res.status(200).json(user);
}
