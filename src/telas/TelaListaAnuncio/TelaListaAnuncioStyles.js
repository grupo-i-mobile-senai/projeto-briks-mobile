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

  containerCampoPesquisa: {
    backgroundColor:CORES.BRANCA,
    height: 48,
    borderWidth: 1,
    borderColor: CORES.SILVER,
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 16,
    // paddingRight: 16,
    // paddingRight: 32,
    flexDirection: "row",
  },
  campoPesquisar: {
    height:"100%",
    flex: 5,
    // borderWidth: 1,
    // borderColor: "transparent",
    
  },
  iconPesquisar: {
    flex:1,
    height:"100%",
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  iconLimparCampo: {
    flex:1,
    height:"100%",
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems:'center',
    
  },
  //estilos imagem
  // containerImagem: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // tamanhoImagem: {
  //   width: 200,
  //   height: 200,
  // },
});

export default styles;
