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
  texto: {
    color: CORES.TEXTO_PADRAO,
    fontWeight: "bold",
  },

  itemSelect: {
    fontSize: 14,
    backgroundColor:CORES.BRANCA
  },
});

export default styles;
