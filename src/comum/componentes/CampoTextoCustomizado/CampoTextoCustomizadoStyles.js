import { StyleSheet } from "react-native";
import CORES from "../../constantes/cores";

const styles = StyleSheet.create({
  campoTexto: {
    borderWidth: 1,
    borderColor: CORES.PRETO,
    borderRadius: 8,
    height: 40,
    padding: 8,
    backgroundColor: CORES.BRANCA,
  },
  labelTexto: {
    color: CORES.TEXTO_CLARO,
    fontWeight: "bold",
  },
});

export default styles;
