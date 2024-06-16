import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      padding: 16,
      gap: 16,
      // backgroundColor: CORES.FUNDO_PADRAO, definir cor fundo
    },

    containerBotao: {
        flexDirection: "row",
        
    },
  
    //estilos imagem
    containerImagem: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    tamanhoImagem: {
      width: 200,
      height: 200,
    },
  });

  export default styles;