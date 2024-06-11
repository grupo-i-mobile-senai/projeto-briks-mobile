import React from "react";
import { Text, View } from "react-native";
import { CampoTextoCustomizadoPrimario } from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import styles from "./TelaLoginStyles";
// import LogoBriks from "../../comum/componentes/LogoBriks/LogoBriks";
import { LogoBriks } from "../../comum/componentes/LogoBriks/LogoBriks";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
//import CORES from "../../comum/constantes/cores";

import TELAS from "../../comum/constantes/telas";
import { atualizarItemStorage } from "../../comum/servicos/servicoStorage";
import { CHAVES_STORAGE } from "../../comum/constantes/chaves-storage";
import api from "../../comum/servicos/api";

import { useToast } from "native-base";


const TelaLogin = (props) => {
  const toast = useToast();
  // const [campoEmail, setCampoEmail] = React.useState("");
  // const [campoCpf, setCampoCpf] = React.useState("");

  const [campoUsuario, setCampoUsuario] = React.useState("");
  const [campoSenha, setCampoSenha] = React.useState("");

  const entrar = async () => {
    try {
      if (!campoUsuario.trim() || !campoSenha.trim()) {
        toast.show({
          description: "Preencha os campos!",
          placement: "top",
        });

        return;
      }

      const response = await api.post("/logar", {
        email: campoUsuario,
        cpf: campoUsuario,
        senha: campoSenha,
      });

      await atualizarItemStorage(CHAVES_STORAGE.USUARIO_LOGADO, response.data);
      props.navigation.navigate(TELAS.TELA_PRINCIPAL);
    } catch (error) {
      toast.show({
        description: error.response.data,
        placement: "top",
      });
      // alert(error.response.data);
    }
  };

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
        label="CPF ou Email"
        value={campoUsuario}
        onChangeText={setCampoUsuario}
        // inputMode="numeric"
        // maxLength={11}
      />
      <CampoTextoCustomizadoPrimario
        // style={styles.campoTextoLogin}
        label="Senha"
        onChangeText={setCampoSenha}
        value={campoSenha}
        secureTextEntry
      />

      {/* <BotaoCustomizado
        cor="primaria"
        onPress={() => {
          alert("estou funcionando!");
          props.navigation.navigate(TELAS.TELA_PRINCIPAL);
        }}
      >
        ENTRAR
      </BotaoCustomizado> */}

      <BotaoCustomizado cor="primaria" onPress={entrar}>
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
