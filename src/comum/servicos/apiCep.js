import axios from "axios";

export const apiCep = axios.create({
  baseURL: "https://brasilapi.com.br/api/cep/v1/",
  //   timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export default apiCep;
