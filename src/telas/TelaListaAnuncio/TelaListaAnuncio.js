import { View } from "react-native";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import TELAS from "../../comum/constantes/telas";
import styles from "./TelaListaAnuncioStyles";

const TelaListaAnuncio = (props) => {
  return (
    <View style={styles.container}>

    {/* COLOCAR CAMPO DE PESQUISA */}

      <BotaoCustomizado
        cor="secundaria"
        onPress={() => props.navigation.navigate(TELAS.TELA_ANUNCIO_DETALHADO)}
      >
        Simulando anúncio
      </BotaoCustomizado>
    </View>
  );
};

export default TelaListaAnuncio;
