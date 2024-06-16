import { StyleSheet } from "react-native";
import CORES from "../../comum/constantes/cores";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    gap: 64,

    // backgroundColor: CORES.LARANJA,
  },

  containerTitulo: {
    alignItems: "center",
    gap: 16,
  },

  containerBotao: {
    gap: 16,
  },

  tituloUm: {
    fontSize: 24,
  },

  tituloDois: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
