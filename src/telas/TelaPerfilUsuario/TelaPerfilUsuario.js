import { ScrollView, Text, TextInput, View } from "react-native";
import CampoImagem from "../../comum/componentes/CampoImagem/CampoImagem";
import { CampoTextoCustomizadoSecundario } from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import styles from "./TelaPerfilUsuarioStyles";
import React, { useEffect } from "react";

import api from "../../comum/servicos/api";

const TelaPerfilUsuario = () => {
  const [campoNome, setCampoNome] = React.useState("");
  const [campoCpf, setCampoCpf] = React.useState("");
  const [campoEmail, setCampoEmail] = React.useState("");
  const [campoSenha, setCampoSenha] = React.useState("");

  const [campoEditavel, setCampoEditavel] = React.useState(false);

  const [botaoEditar, setBotaoEditar] = React.useState(true);
  const [botaoSalvar, setBotaoSalvar] = React.useState(false);
  const [botaoExcluirConta, setBotaoExcluirConta] = React.useState(true);

  //CARREANDO DADOS DO USUARIO NO PERFIL
  useEffect(() => {
    const carregarDadosUsuario = async () => {
      try {
        const response = await api.get("/perfil");
        setCampoNome(response.data[0].nome);
        setCampoCpf(response.data[0].cpf);
        setCampoEmail(response.data[0].email);
        setCampoSenha(response.data[0].senha);
        console.log("O nome é: " + response.data[0].nome);
      } catch (error) {
        console.log("Erro: " + error);
      }
    };

    carregarDadosUsuario();
  }, []);

  //ALTERANDO O ESTADO DOS CAMPOS E BOTOES
  const editarCampos = () => {
    // setCampoNome(campoNome);
    setCampoEditavel(true);
    setBotaoSalvar(true);
    setBotaoEditar(false);
    setBotaoExcluirConta(false);

    console.log("Nome: " + campoNome);
    console.log("CPF:" + campoCpf);
    console.log("Email: " + campoEmail);
    console.log("Senha criptografada: " + campoSenha);
  };

  const salvarDados = async () => {
    try {
      const dadosPerfil = {
        nome: campoNome,
        email: campoEmail,
        
      };

      await api.put("/perfil", dadosPerfil);

      console.log(dadosPerfil);
      // alert("Dados salvos com sucesso!");
      // setCampoNome('');
      // setCampoCpf("");
      // setCampoEmail("");
      // setCampoSenha("");
      // props.navigation.navigate(TELAS.TELA_LOGIN);
    } catch (error) {
      alert(error.response.data);
    }

    setCampoEditavel(false);
    setBotaoSalvar(false);
    setBotaoEditar(true);
    setBotaoExcluirConta(true);
    // alert("Dados salvos com sucesso!");
  };

  // Atualizar editable -> readOnly
  // https://reactnative.dev/docs/textinput#readonly

  // implementar validacao de senha atual para criar nova senha

  // https://reactnative.dev/docs/textinput#onchangetext

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerImagem}>
          <CampoImagem />
        </View>

        <CampoTextoCustomizadoSecundario
          label="Nome"
          value={campoNome}
          editable={campoEditavel}
          onChangeText={(textoNome) => setCampoNome(textoNome)}
        />

        <CampoTextoCustomizadoSecundario
          label="CPF"
          inputMode="numeric"
          value={campoCpf}
          editable={false}
          maxLength={11}
          onChangeText={(textoCpf) => setCampoCpf(textoCpf)}
        />

        <CampoTextoCustomizadoSecundario
          label="Email"
          inputMode="email"
          value={campoEmail}
          editable={campoEditavel}
          onChangeText={(textoEmail) => setCampoEmail(textoEmail)}
        />

        <CampoTextoCustomizadoSecundario
          label="Senha"
          secureTextEntry
          value={campoSenha}
          editable={campoEditavel}
          onChangeText={(textoSenha) => setCampoSenha(textoSenha)}
        />

        <View>
          {botaoEditar && (
            <BotaoCustomizado cor="secundaria" onPress={editarCampos}>
              Editar Dados
            </BotaoCustomizado>
          )}
          {botaoSalvar && (
            <BotaoCustomizado cor="primaria" onPress={salvarDados}>
              Salvar
            </BotaoCustomizado>
          )}
        </View>

        <View>
          {botaoExcluirConta && (
            <BotaoCustomizado cor="primaria">Excluir Conta</BotaoCustomizado>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default TelaPerfilUsuario;
