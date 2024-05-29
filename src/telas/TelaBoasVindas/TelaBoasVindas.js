import { Text, View } from "react-native";
import styles from "../TelaBoasVindas/TelaBoasVindasStyles";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import TELAS from "../../comum/constantes/telas";
// import LogoBriks from "../../comum/componentes/LogoBriks/LogoBriks";
import { IconBriks } from "../../comum/componentes/LogoBriks/LogoBriks";

const TelaBoasVindas = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <IconBriks />
      </View>

      <View style={styles.containerTitulo}>
        <Text style={styles.tituloUm}>Bem-vindo ao Briks!</Text>
        <Text style={styles.tituloDois}>Seu App de trocas facilitadas.</Text>
      </View>

      <View style={styles.containerBotao}>
        <BotaoCustomizado
          cor="primaria"
          onPress={() => {alert("estou funcionando!"); props.navigation.navigate(TELAS.TELA_LOGIN)}}
        >
          ENTRAR
        </BotaoCustomizado>

        <BotaoCustomizado cor="secundaria" onPress={() => props.navigation.navigate(TELAS.TELA_CADASTRO_USUARIO)}>
          CRIAR UMA CONTA
        </BotaoCustomizado>

      </View>
      
    </View>
  );
};

export default TelaBoasVindas;
