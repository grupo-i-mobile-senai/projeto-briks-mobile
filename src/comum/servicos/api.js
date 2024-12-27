import axios from "axios";
import { pegarItemStorage } from "./servicoStorage";
import { CHAVES_STORAGE } from "../constantes/chaves-storage";

let instancia = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "https://briks-api.onrender.com",
});

instancia.interceptors.request.use(async (config) => {
  const usuarioLogado = await pegarItemStorage(CHAVES_STORAGE.USUARIO_LOGADO);
  if (usuarioLogado) {
    config.headers["x-usuario-logado"] = usuarioLogado.id_usuario;
  }

  return config;
});

export default instancia;
