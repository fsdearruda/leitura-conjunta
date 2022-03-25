// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import getSkoobUser from "../../utils/getSkoobUser";
import getUserPages from "../../utils/getUserPages";
import type User from "../../models/User";

const userIds: number[] = [7889983, 914318, 7902732, 7873228, 5393730, 5466125];

export default async function handler(req: NextApiRequest, res: NextApiResponse<User[]>) {
  let users = await Promise.all(
    userIds.map(async id => {
      let userInfo = await getSkoobUser(id);
      let userPages = await getUserPages(id);

      return { ...userInfo, pages: userPages };
    })
  );

  res.status(200).json(users);
}
