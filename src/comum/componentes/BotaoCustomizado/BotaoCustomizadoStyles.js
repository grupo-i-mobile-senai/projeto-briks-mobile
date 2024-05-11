import { StyleSheet } from "react-native";
import CORES from "../../constantes/cores";

const styles = StyleSheet.create({
  botao: {
    height: 40,
    minWidth: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  botaoPrimario: {
    backgroundColor: CORES.PRIMARIA,
  },

  botaoSecundario: {
    backgroundColor: CORES.SECUNDARIA,
  },

  botaoPadrao: {
    backgroundColor: CORES.LARANJA,
    borderWidth: 1,
    borderColor: CORES.BRANCA,
  },

  textoBotao: {
    color: CORES.BRANCA,
  },
});

export default styles;
