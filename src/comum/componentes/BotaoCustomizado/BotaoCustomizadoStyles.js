import { StyleSheet } from "react-native";
import CORES from "../../constantes/cores";

const styles = StyleSheet.create({
  botao: {
    height: 48,
    Width: 40,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  botaoPrimario: {
    backgroundColor: CORES.PRIMARIA,
    borderColor: CORES.PRIMARIA,
  },

  botaoSecundario: {
    backgroundColor: CORES.SECUNDARIA,
  },

  botaoPadrao: {
    backgroundColor: CORES.LARANJA,
    borderColor: CORES.BRANCA,
  },

  textoBotao: {
    color: CORES.BRANCA,
  },
});

export default styles;
