import axios from "axios";

interface SkoobResponse {
  success: boolean;
  response: {
    nome: string;
    skoob: string;
    foto: string;
  };
}

const config = {
  headers: {
    Cookie:
      "user_is_logged=1; user_logged=%7B%22id%22%3A8377800%2C%22nome%22%3A%22Casada%20Bot%22%2C%22apelido%22%3A%22Casada%22%2C%22sexo%22%3A%22F%22%2C%22dt_nascimento%22%3A%22%22%2C%22email%22%3A%22msfisherpix@gmail.com%22%2C%22estado%22%3A%22Rio%20de%20Janeiro%22%2C%22uf%22%3A%22RJ%22%2C%22foto%22%3A%22https%3A//img.skoob.com.br/f7NFoXfsnLQF3cG3Yxf7g2ubB4Y%3D/40x40/center/top/filters%3Aformat%28jpeg%29/https%3A//skoob.s3.amazonaws.com/usuarios/8377800/8377800SK-V11634495459G.jpg%22%2C%22foto_placeholder%22%3A%22https%3A//img.skoob.com.br/8PnufcSgSZu9BnMCEXVaSBJImZo%3D/20x20/center/top/filters%3Aformat%28jpeg%29/https%3A//skoob.s3.amazonaws.com/usuarios/8377800/8377800SK-V11634495459G.jpg%22%2C%22url%22%3A%22/usuario/8377800-casada%22%2C%22skoob%22%3A%22Casada%22%2C%22verified%22%3A%22%22%2C%22beta%22%3A0%2C%22ano%22%3A2021%2C%22mes%22%3A10%2C%22about%22%3A%22%22%2C%22random%22%3A1642639556.655%2C%22premium%22%3A0%7D; PHPSESSID=gnq1bpi63mk6vdlvt71baer6m2; user_is_logged=0; user_logged=null; __utmc=33443132; __utmt=1; CakeCookie[Skoob]=%7B%22usuario%22%3A%22msfisherpix%40gmail.com%238377800%22%2C%22lgpd%22%3A%22lgpd-agree%22%7D; __gads=ID=27c0a1ad116bd669-220087e7897b0089:T=1642639424:S=ALNI_MYGi69uRDuixZyQhM5y97NntWL_UA; __asc=47a617cc17e74f03ccd90c7d3c8; __auc=47a617cc17e74f03ccd90c7d3c8; __utma=33443132.1269957568.1642639409.1642639409.1642639409.1; __utmz=33443132.1642639409.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmb=33443132.3.10.1642639409",
  },
};

async function getUser(userID: number) {
  const response = await axios.get<SkoobResponse>(`https://www.skoob.com.br/v1/user/${userID}`, config);
  const data = response.data.response;
  return {
    nome: data.nome.trim(),
    skoob: data.skoob.trim(),
    foto: data.foto,
  };
}

export default getUser;
