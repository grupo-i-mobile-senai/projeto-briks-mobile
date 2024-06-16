import { StyleSheet } from "react-native";
import CORES from "../../constantes/cores";

const styles = StyleSheet.create({
  container: {
    backgroundColor: CORES.LARANJA,
    height: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  titulo: {
    color: CORES.TEXTO_CLARO,
    fontSize: 16,
  },
  avatar: {
    height: 32,
    width: 32,
    borderRadius: 50,
    backgroundColor: CORES.BRANCA,
    justifyContent: "center",
    alignItems: "center",
  },
  imagem: {
    height: 24,
    width: 24,
    borderRadius: 12,
  },
});

export default styles;
