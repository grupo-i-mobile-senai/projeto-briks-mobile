import { StyleSheet } from "react-native";
import CORES from "../../constantes/cores";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImagem: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth:1,
    width: 200,
    height: 200,
    borderColor: CORES.LARANJA
  },
  tamanhoImagem: {
    width: 200,
    height: 200,
  },
});

export default styles;
