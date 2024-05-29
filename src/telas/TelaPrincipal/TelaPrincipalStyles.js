import { StyleSheet } from "react-native";
import CORES from "../../comum/constantes/cores";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignContent: "center",
    // flexDirection: "row",
    // flexWrap: "wrap",
    padding: 16,
    gap: 16,
    backgroundColor: CORES.LARANJA,
  },
  containerBotao: {
    //  flex:1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
    //  borderWidth:1
  },
});

export default styles;
