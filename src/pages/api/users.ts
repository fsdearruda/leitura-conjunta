// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { skoobFetch } from "../../utils/skoobTools";
import type { User } from "../../models/User";

type ErrorMessage = {
  error: boolean;
  message: string | unknown;
};

const userIds: number[] = [7889983, 914318, 7902732, 7873228, 5393730, 7054114, 8810081, 6258890];

const getUserPages = async (userID: string) => {
  let totalPages = 0;
  let response = await skoobFetch(`bookcase/books/${userID}/shelf_id:0/limit:1000000`);
  response.forEach((book: any) => {
    if (book.livro_id === 7123) {
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

export default async function handler(req: NextApiRequest, res: NextApiResponse<User[] | ErrorMessage>) {
  if (req.method !== "GET") return res.status(405).json({ error: true, message: "Method not allowed" });
  try {
    const users = await Promise.all(userIds.map(id => getUser(id.toString())));
    return res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: true, message: err });
  }
}
