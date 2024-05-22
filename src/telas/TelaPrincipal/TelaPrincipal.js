import { View } from "react-native";
import TELAS from "../../comum/constantes/telas";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import styles from "./TelaPrincipalStyles";

const TelaPrincipal = (props) => {
  return (
    <View style={styles.container}>
      <BotaoCustomizado
        cor="primaria"
        onPress={() => props.navigation.navigate(TELAS.TELA_ANUNCIO_DETALHADO)}
      >
        SOU UM EXEMPLO ANÚNCIO - 1
      </BotaoCustomizado>

      <BotaoCustomizado
        cor="primaria"
        onPress={() => props.navigation.navigate(TELAS.TELA_CADASTRO_PRODUTO)}
      >
        CADASTRAR PRODUTO
      </BotaoCustomizado>

      <BotaoCustomizado
        cor="primaria"
        onPress={() => props.navigation.navigate(TELAS.TELA_ANUNCIO_DETALHADO)}
      >
        SOU UM EXEMPLO ANÚNCIO - 3
      </BotaoCustomizado>
    </View>
  );
};

export default TelaPrincipal;
