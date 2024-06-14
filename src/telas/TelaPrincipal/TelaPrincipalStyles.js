import { Platform, StyleSheet } from "react-native";
import CORES from "../../comum/constantes/cores";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
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

  containerTodosBotoes: {
    flex: 1,
    justifyContent: "center",
    gap: 16,
  },

  containerDashboard: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    elevation: Platform.OS === "android" ? 4 : 0,
    elevation: 5,
    shadowRadius: 4,
    borderWidth: 0,
    height: 96,
  },

  texto: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },

  textoGrande: {
    fontSize: 44,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
