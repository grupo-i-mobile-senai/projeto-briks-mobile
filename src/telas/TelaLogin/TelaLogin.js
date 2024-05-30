import { Text, View } from "react-native";
import { CampoTextoCustomizadoPrimario } from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import styles from "./TelaLoginStyles";
// import LogoBriks from "../../comum/componentes/LogoBriks/LogoBriks";
import { LogoBriks } from "../../comum/componentes/LogoBriks/LogoBriks";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
//import CORES from "../../comum/constantes/cores";

import TELAS from "../../comum/constantes/telas";

const TelaLogin = (props) => {

  const [campoCpf, setCampoCpf] = useState('');
  const [campoSenha, setCampoSenha] = useState('');

  const entrar = async () => {
    try {
      if (!campoCpf.trim() || !campoSenha.trim()) {
        alert('Preencha os campos!');
        return;
      }

      const response = await api.post('/logar', { cpf: campoUsuario, senha: campoSenha });

      await atualizarItemStorage(CHAVES_SOTORAGE.USUARIO_LOGADO, response.data);
      props.navigation.navigate(TELAS.TELA_PRINCIPAL);
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <LogoBriks />

        <Text style={estilos.tituloEntrar}>Entrar</Text>
    
      </View>


      <View style={styles.containerTituloEntrar}>
        {/* <Text style={styles.tituloEntrar}>Entrar</Text> */}
      </View>

      <CampoTextoCustomizadoPrimario
        // style={styles.campoTextoLogin}
        label="CPF"
        value={campoCpf}
        inputMode="numeric"
        maxLength={11}
      />
      <CampoTextoCustomizadoPrimario
        // style={styles.campoTextoLogin}
        label="Senha"
        value={campoSenha}
        secureTextEntry
      />

      <BotaoCustomizado
        cor="primaria"
        onPress={() => {
          alert("estou funcionando!");
          props.navigation.navigate(TELAS.TELA_PRINCIPAL);
        }}
      >
        ENTRAR
      </BotaoCustomizado>

      <BotaoCustomizado
        cor="secundaria"
        onPress={() => props.navigation.navigate(TELAS.TELA_CADASTRO_USUARIO)}
      >
        CADASTRAR
      </BotaoCustomizado>
    </View>
  );
};

export default TelaLogin;
