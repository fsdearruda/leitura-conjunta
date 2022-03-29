import axios from "axios";

type Book = {
  bookID: number;
  titulo: string;
  ano: number;
  autor: string;
  editora: string;
  paginas: number;
  capa: string;
};

const getBookInfo = async (bookID: number) => {
  const response = await axios.get(`https://www.skoob.com.br/v1/book/${bookID}`);
  const data = response.data.response;
  const book: Book = {
    bookID: data.id,
    titulo: data.titulo,
    ano: data.ano,
    autor: data.autor,
    editora: data.editora,
    paginas: data.paginas,
    capa: data.img_url,
  };
  return book;
};

export default getBookInfo;
