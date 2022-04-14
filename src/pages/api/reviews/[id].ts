import type Review from "../../../models/Review";
import type { NextApiRequest, NextApiResponse } from "next";
import * as cheerio from "cheerio";
import axios from "axios";

type ErrorMessage = {
  error: boolean;
  message: string | unknown;
};

const fetchPages = async (userID: string) => {
  let page = await axios.get(`https://www.skoob.com.br/estante/resenhas/${userID}`, { responseEncoding: "binary" });
  const $ = cheerio.load(page.data.toString("ISO-8859-1"));
  let pageCount = $(".paginacao_lista_busca_down > .numeros").children().length;

  if (!pageCount) return [page.data];
  let pages = new Array(pageCount).fill(null);
  pages = await Promise.all(
    pages.map(async page => {
      let response = await axios.get(`https://www.skoob.com.br/estante/resenhas/${userID}/mpage:${pages.indexOf(page) + 1}`, { responseEncoding: "binary" });
      return response.data;
    })
  );
  return pages;
};
// Usando por enquanto
const fetchPagesTemp = async (userID: string) => {
  let page = await axios.get(`https://www.skoob.com.br/estante/resenhas/${userID}`, { responseEncoding: "binary" });
  return page;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Review[] | ErrorMessage>) {
  if (req.method !== "GET") return res.status(405).json({ error: true, message: "Method not allowed" });
  const userID = <string>req.query.id;
  if (!userID) return res.status(403).json({ error: true, message: "User ID not provided" });
  try {
    const reviews: Review[] = [];
    const page = await fetchPagesTemp(userID);
    /* 1 temporário, por algum motivo o loop não ta funcionando direito */
    for (let i = 0; i < 1; i++) {
      // adicionar pages[i]
      const $ = cheerio.load(page.data.toString("ISO-8859-1"), { decodeEntities: false });
      $("div.curva2-5").each((i, el) => {
        const element = $(el);
        if (element.children().length === 1) {
          const author = element
            .first()
            .find("strong")
            .text()
            .split(/(?=[A-Z])/)[0];
          let title: string[] | string = element
            .first()
            .find("strong")
            .text()
            .split(/(?=[A-Z])/);
          title.shift();
          title = title.join("").trim();
          const date = element.first().find("span").text().trim();
          const reviewContent = element.first().contents().text();
          const review: Review = {
            author_id: parseInt(userID),
            book_id: parseInt(<string>$(element).parent().find("star-rating").attr("id")),
            author: author.trim(),
            title: title ? title : null,
            date,
            review: title ? reviewContent.split(date)[1].trim().split(title)[1].toString() : reviewContent.split(date)[1].trim() + "",
            rating: parseInt(<string>$(element).parent().find("star-rating").attr("rate")),
          };
          reviews.push(review);
        }
      });
    }
    res.status(200).json(reviews);
  } catch (err) {
    console.log(err);
  }
}
