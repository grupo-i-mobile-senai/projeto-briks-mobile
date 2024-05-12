import { StyleSheet } from "react-native";
import CORES from "../../comum/constantes/cores";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    gap: 16,
    backgroundColor: CORES.LARANJA,
  },
  scrollView: {
    flex: 1,
  },
});

export default styles;
