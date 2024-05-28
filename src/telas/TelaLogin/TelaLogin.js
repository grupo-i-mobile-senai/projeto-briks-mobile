import { Text, View } from "react-native";
import { CampoTextoCustomizadoPrimario } from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import styles from "./TelaLoginStyles";
// import LogoBriks from "../../comum/componentes/LogoBriks/LogoBriks";
import { LogoBriks } from "../../comum/componentes/LogoBriks/LogoBriks";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import CORES from "../../comum/constantes/cores";

import TELAS from "../../comum/constantes/telas";


const TelaLogin = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <LogoBriks />
      </View>

      <View style={styles.containerTituloEntrar}>
        {/* <Text style={styles.tituloEntrar}>Entrar</Text> */}
      </View>

      <CampoTextoCustomizadoPrimario
        // style={styles.campoTextoLogin}
        label="CPF"
        inputMode="numeric"
        maxLength={11}
      />
      <CampoTextoCustomizadoPrimario
        // style={styles.campoTextoLogin}
        label="Senha"
        secureTextEntry
      />

      <BotaoCustomizado
        cor="primaria"
        onPress={() => {alert("estou funcionando!"); props.navigation.navigate(TELAS.TELA_PRINCIPAL)}}
      >
        ENTRAR
      </BotaoCustomizado>

      <BotaoCustomizado onPress={() => props.navigation.navigate(TELAS.TELA_CADASTRO_USUARIO)}>
        CADASTRAR
      </BotaoCustomizado>
    </View>
  );
};

export default TelaLogin;
