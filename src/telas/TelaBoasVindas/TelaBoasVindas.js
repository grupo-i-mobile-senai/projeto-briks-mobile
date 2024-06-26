import { Text, View } from "react-native";
import styles from "../TelaBoasVindas/TelaBoasVindasStyles";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import TELAS from "../../comum/constantes/telas";
// import LogoBriks from "../../comum/componentes/LogoBriks/LogoBriks";
import { IconBriks } from "../../comum/componentes/LogoBriks/LogoBriks";
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";

const TelaBoasVindas = (props) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0, 1]}
      colors={["#FFA500", "#FF6347"]}
      style={{ flex: 1 }}
    >
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
            onPress={() => props.navigation.navigate(TELAS.TELA_LOGIN)}
          >
            ENTRAR
          </BotaoCustomizado>

          <BotaoCustomizado
            onPress={() =>
              props.navigation.navigate(TELAS.TELA_CADASTRO_USUARIO)
            }
          >
            CRIAR UMA CONTA
          </BotaoCustomizado>
        </View>
      </View>
    </LinearGradient>
  );
};

export default TelaBoasVindas;
