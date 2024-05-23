import { StyleSheet } from "react-native";
import CORES from "../../comum/constantes/cores";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    gap: 16,
    // backgroundColor: CORES.FUNDO_PADRAO, definir cor fundo
  },
  campoDescricao: {
    height: 40,
  },

  //estilos imagem
  containerImagem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tamanhoImagem: {
    width: 200,
    height: 200,
  },
});

export default styles;
