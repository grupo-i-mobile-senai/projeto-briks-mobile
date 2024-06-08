import { View } from "react-native";
import TELAS from "../../comum/constantes/telas";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import styles from "./TelaPrincipalStyles";

const TelaPrincipal = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerBotao}>
        <BotaoCustomizado
          cor="padrao"
          onPress={() =>
            props.navigation.navigate(TELAS.TELA_LISTA_ANUNCIO)
          }
        >
          LISTAR ANÚNCIOS
        </BotaoCustomizado>

        <BotaoCustomizado
          cor="padrao"
          onPress={() => props.navigation.navigate(TELAS.TELA_MEUS_ANUNCIOS)}
        >
          MEUS ANÚNCIOS
        </BotaoCustomizado>
      </View>

      <View style={styles.containerBotao}>
        <BotaoCustomizado
          cor="padrao"
          onPress={() => props.navigation.navigate(TELAS.TELA_CADASTRO_PRODUTO)}
        >
          ANUNCIAR PRODUTO
        </BotaoCustomizado>

        <BotaoCustomizado
          cor="padrao"
          onPress={() =>
            props.navigation.navigate(TELAS.TELA_CADASTRO_SERVICO)
          }
        >
          ANUNCIAR SERVIÇO
        </BotaoCustomizado>
      </View>

      <View style={styles.containerBotao}>
        <BotaoCustomizado
          cor="padrao"
          onPress={() =>
            props.navigation.navigate(TELAS.TELA_PERFIL_USUARIO)
          }
        >
          PERFIL
        </BotaoCustomizado>

        <BotaoCustomizado
        cor="padrao"
          onPress={() =>
            props.navigation.navigate(TELAS.TELA_LOGIN)
          }
        >
          SAIR
        </BotaoCustomizado>
      </View>
    </View>
  );
};

export default TelaPrincipal;
