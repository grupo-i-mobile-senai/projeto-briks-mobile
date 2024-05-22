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
});

export default styles;
