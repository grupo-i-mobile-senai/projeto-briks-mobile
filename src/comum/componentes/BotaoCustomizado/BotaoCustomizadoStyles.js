import { Platform, StyleSheet } from "react-native";
import CORES from "../../constantes/cores";

const styles = StyleSheet.create({
  botao: {
    height: 48,
    // width: 40,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  botaoPrimario: {
    backgroundColor: CORES.PRIMARIA,
    borderColor: CORES.PRIMARIA,
  },

  botaoSecundario: {
    backgroundColor: CORES.LARANJA,
    borderColor: CORES.BRANCA,
  },

  botaoPadrao: {
    flex: 1,
    height: 144,
    backgroundColor: CORES.LIGHTGREY,
    color: CORES.TEXTO_PADRAO,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    elevation: Platform.OS === "android" ? 4 : 0,
    elevation: 5,
    shadowRadius: 4,
    borderWidth: 0,


    // borderColor:'none',
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },

  textoBotao: {
    color: CORES.TEXTO_CLARO,
    fontWeight: "bold",
  },

  textoBotaoPadrao: {
    color: CORES.PRIMARIA,
    fontWeight: "bold",
  },
});

export default styles;
