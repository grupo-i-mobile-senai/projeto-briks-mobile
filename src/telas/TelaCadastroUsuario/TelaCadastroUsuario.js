import React from "react";
import { View, ScrollView } from "react-native";
import styles from "./TelaCadastroUsuarioStyles";
import { CampoTextoCustomizadoPrimario } from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import TELAS from "../../comum/constantes/telas";

import api from "../../comum/servicos/api";

import { useToast } from "native-base";

import { LinearGradient } from "expo-linear-gradient";

const TelaCadastroUsuario = (props) => {
  const toast = useToast();

  const [campoNome, setCampoNome] = React.useState("");
  const [campoCpf, setCampoCpf] = React.useState("");
  const [campoEmail, setCampoEmail] = React.useState("");
  const [campoSenha, setCampoSenha] = React.useState("");

  const salvar = async () => {
    try {
      const usuario = {
        nome: campoNome,
        cpf: campoCpf,
        email: campoEmail,
        senha: campoSenha,
      };

      await api.post("/usuarios", usuario);

      // alert("Dados salvos com sucesso!");

      toast.show({
        description: "Conta criada com sucesso!",
        placement: "top",
      });

      setCampoNome("");
      setCampoCpf("");
      setCampoEmail("");
      setCampoSenha("");
      props.navigation.navigate(TELAS.TELA_LOGIN);
    } catch (error) {
      // alert(error.response.data);
      toast.show({
        description: error.response.data,
        placement: "top",
      });
    }
  };

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0, 1]}
      colors={["#FFA500", "#FF6347"]}
      style={{ flex: 1 }}
    >
      {/* <ScrollView> */}
      <View style={styles.container}>
        <View>
          <CampoTextoCustomizadoPrimario
            value={campoNome}
            label="Nome"
            onChangeText={setCampoNome}
          />
          <CampoTextoCustomizadoPrimario
            value={campoCpf}
            label="CPF"
            onChangeText={setCampoCpf}
            inputMode="numeric"
            maxLength={11}
          />
          <CampoTextoCustomizadoPrimario
            value={campoEmail}
            label="Email"
            onChangeText={setCampoEmail}
            inputMode="email"
          />

          <CampoTextoCustomizadoPrimario
            value={campoSenha}
            label="Senha"
            onChangeText={setCampoSenha}
            secureTextEntry
          />
          {/* <CampoTextoCustomizadoPrimario label="Confirmar Senha" secureTextEntry /> */}
          <View style={styles.containerBotao}>
            <BotaoCustomizado cor="primaria" onPress={salvar}>
              CADASTRAR
            </BotaoCustomizado>
            <BotaoCustomizado
              // cor="secundaria"
              onPress={() => props.navigation.navigate(TELAS.TELA_LOGIN)}
            >
              ENTRAR
            </BotaoCustomizado>
          </View>
        </View>
      </View>

      {/* </ScrollView> */}
    </LinearGradient>
  );
};

export default TelaCadastroUsuario;
