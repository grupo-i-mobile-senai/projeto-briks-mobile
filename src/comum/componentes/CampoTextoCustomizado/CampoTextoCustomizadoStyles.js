import { StyleSheet } from "react-native";
import CORES from "../../constantes/cores";

const styles = StyleSheet.create({
  campoTextoPrimario: {
    borderBottomWidth: 1,
    height: 40,
    padding: 8,
    borderBottomColor: CORES.BRANCA,
    borderRadius: 8,
    color: CORES.TEXTO_CLARO,
    fontSize: 16,
    marginBottom: 16,
  },
  campoTextoSecundario: {
    borderWidth: 1,
    borderColor: CORES.SILVER,
    borderRadius: 8,
    height: 40,
    padding: 8,
    backgroundColor: CORES.BRANCA,
  },

  campoTextoDescricao: {
    borderWidth: 1,
    borderColor: CORES.SILVER,
    borderRadius: 8,
    height: 80,
    padding: 8,
    backgroundColor: CORES.BRANCA,
  },

  labelTextoPrimario: {
    color: CORES.TEXTO_CLARO,
    fontWeight: "bold",
  },
  labelTextoSecundario: {
    color: CORES.TEXTO_PADRAO,
    fontWeight: "bold",
  },
});

export default styles;
