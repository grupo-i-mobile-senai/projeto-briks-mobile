import { Text, View } from "react-native";
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import styles from "./TelaLoginStyles";
import LogoBriks from "../../comum/componentes/LogoBriks/LogoBriks";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import CORES from "../../comum/constantes/cores";

const TelaLogin = () => {
  return (
    <View style={styles.container}>
      <View>
        <LogoBriks />
      </View>

      <View style={styles.containerTituloEntrar}>
        {/* <Text style={styles.tituloEntrar}>Entrar</Text> */}
      </View>

      <CampoTextoCustomizado
        style={styles.campoTextoLogin}
        label="CPF"
        inputMode="numeric"
        maxLength={11}
      />
      <CampoTextoCustomizado
        style={styles.campoTextoLogin}
        label="Senha"
        secureTextEntry
      />

      <BotaoCustomizado
        cor="primaria"
        onPress={() => alert("estou funcionando!")}
      >
        Entrar
      </BotaoCustomizado>

      <BotaoCustomizado onPress={() => alert("estou funcionando!")}>
        Criar conta
      </BotaoCustomizado>
    </View>
  );
};

export default TelaLogin;
