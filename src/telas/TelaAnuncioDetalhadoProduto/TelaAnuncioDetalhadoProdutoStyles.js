import { StyleSheet } from "react-native";
import CORES from "../../comum/constantes/cores";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 16,
    gap: 16,
    backgroundColor: CORES.BRANCA,

  },
  containerImagem: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 16,
    gap: 16,
    backgroundColor: CORES.BRANCA,
    

    borderWidth:1,
    borderColor:CORES.LIGHTGREY,

    borderRadius:8,
    alignItems:'center'
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subTitulo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  texto: {
    fontSize: 16,
    color:CORES.TEXTO_PADRAO
  },

  dadosAnuncio:{
  
    // borderWidth:1,
    // borderColor:CORES.CINZA_MAIS_CLARO,
    padding:8,
    borderRadius:8,
    marginTop:16,
    backgroundColor:CORES.CINZA_SUAVE

  }
});

export default styles;
