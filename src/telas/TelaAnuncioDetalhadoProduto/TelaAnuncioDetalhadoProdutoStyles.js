import { StyleSheet } from "react-native";
import CORES from "../../comum/constantes/cores";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 16,
    gap: 16,
    backgroundColor: CORES.BRANCA,
  },
  titulo: {
    fontSize: 36,
    fontWeight: "bold",
  },
  subTitulo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  texto: {
    fontSize: 18,
  },
});

export default styles;
