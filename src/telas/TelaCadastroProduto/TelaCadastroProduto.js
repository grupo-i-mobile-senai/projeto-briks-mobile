import { View } from "react-native";
import { CampoTextoCustomizadoSecundario } from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import styles from "./TelaCadastroProdutoStyles";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";

const TelaCadastroProduto = () => {
  return (
    <View style={styles.container}>
        
      <CampoTextoCustomizadoSecundario label="Título" />
      <CampoTextoCustomizadoSecundario  label="Descrição" multiline={true} numberOfLines={4} />
      <CampoTextoCustomizadoSecundario label="Localização" inputMode='numeric'/>
      <BotaoCustomizado cor="primaria"onPress={() => alert('Seu anúncio foi cadastrado com sucesso!')}>
        Anunciar
      </BotaoCustomizado>
    </View>
  );
};

export default TelaCadastroProduto;
