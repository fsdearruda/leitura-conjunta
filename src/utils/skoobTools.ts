import axios from "axios";
import type { SkoobResponse, SearchResult } from "../models/SkoobResponse";
import type Book from "../models/Book";
import type { User } from "../models/User";
import * as cheerio from "cheerio";

const amazonTag = <string>process.env.amazon_tag;
const config = {
  headers: {
    Cookie: <string>process.env.SKOOB_AUTH,
  },
};

const skoobSearch = async (query: string) => {
  let response = await axios.get<SearchResult>(`https://www.skoob.com.br/search/v1?q=${query}&limit=3`);
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

const getBookISBN = async (skoobURL: string) => {
  const page = await axios.get(`https://skoob.com.br${skoobURL}`, { responseEncoding: "binary" });
  const $ = cheerio.load(page.data.toString("ISO-8859-1"));
  let isbn: string[] = [];
  $("div[class='sidebar-desc']")
    .children()
    .each((i, el) => {
      let text = $(el).text();
      if (text) {
        isbn.push(text);
      }
    });
  if (isbn.length <= 3) {
    isbn.pop();
  }
  return isbn.length >= 2 ? isbn : null;
};

const getAmazonUrl = async (isbn: string[] | null) => {
  if (!isbn) return null;
  return `https://amazon.com.br/dp/${isbn[1]}?tag=${amazonTag}`;
};

const getBook = async (bookID: string): Promise<Book> => {
  let response = await skoobFetch(`book/${bookID}`);
  const { id, livro_id, titulo, subtitulo, ano, paginas, autor, sinopse, editora, leitores, capa_grande, url } = response;
  const isbn = await getBookISBN(url);
  const amazon_url = await getAmazonUrl(isbn);

  return {
    id,
    livro_id,
    titulo,
    subtitulo,
    ano,
    paginas,
    autor,
    sinopse: sinopse.trim(),
    editora,
    leitores,
    isbn_10: isbn ? isbn[0] : null,
    isbn_13: isbn ? isbn[1] : null,
    skoob_url: url,
    amazon_url,
    capa: capa_grande,
  };
};

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

export { skoobFetch, skoobSearch, getBook, getUser };
