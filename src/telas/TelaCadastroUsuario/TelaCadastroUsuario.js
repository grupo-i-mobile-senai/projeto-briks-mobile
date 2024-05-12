import { View } from "react-native";
import styles from "./TelaCadastroUsuarioStyles";
import { CampoTextoCustomizadoPrimario } from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import { ScrollView } from "react-native";
import TELAS from "../../comum/constantes/telas";

const TelaCadastroUsuario = (props) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <CampoTextoCustomizadoPrimario label="Nome" />
        <CampoTextoCustomizadoPrimario label="Email" inputMode="email" />
        <CampoTextoCustomizadoPrimario label="Telefone" inputMode="tel" />
        <CampoTextoCustomizadoPrimario label="CPF" inputMode="numeric" maxLength={11} />
        <CampoTextoCustomizadoPrimario label="CEP" inputMode="numeric" />
        <CampoTextoCustomizadoPrimario label="Senha" secureTextEntry />
        <CampoTextoCustomizadoPrimario label="Confirmar Senha" secureTextEntry />
        <BotaoCustomizado cor="primaria" onPress={() => alert("estou funcionando!")}>CADASTRAR</BotaoCustomizado>
        <BotaoCustomizado onPress={() => props.navigation.navigate(TELAS.TELA_LOGIN)}>ENTRAR</BotaoCustomizado>
      </View>
    </ScrollView>
    
  );

};

export default TelaCadastroUsuario;
