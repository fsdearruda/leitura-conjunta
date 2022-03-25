import axios from "axios";

type Book = {
  ranking: number;
  tipo: number;
  paginas_lidas: number;
  paginas: number;
  edicao: {
    livro_id: number;
    id: number;
    titulo: string;
    autor: string;
    paginas: number;
  };
};

interface SkoobResponse {
  success: boolean;
  response: Book[];
}
// 412608 George Orwell 1984
const bookID = 941;

const getUserPages = async (userID: number) => {
  let userPages = 0;
  const response = await axios.get<SkoobResponse>(`https://www.skoob.com.br/v1/bookcase/books/${userID}/shelf_id:0/limit:1000000000`);

  response.data.response.forEach(book => {
    if (book.edicao.livro_id === bookID) {
      userPages += book.paginas_lidas;
    }
  });

  return userPages;
};

export default getUserPages;
