import axios from "axios";

type Book = {
  ranking: number;
  tipo: number;
  paginas_lidas: number;
  paginas: number;
  edicao: {
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

const getUserPages = async (userID: number) => {
  let userPages = 0;
  const response = await axios.get<SkoobResponse>(`https://www.skoob.com.br/v1/bookcase/books/${userID}/shelf_id:0/limit:1000000000`);

  response.data.response.forEach(book => {
    userPages += book.paginas_lidas;
  });

  return userPages;
};

export default getUserPages;
