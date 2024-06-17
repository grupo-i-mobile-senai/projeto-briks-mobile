import { ScrollView, Text, TextInput, View } from "react-native";
import CampoImagem from "../../comum/componentes/CampoImagem/CampoImagem";
import { CampoTextoCustomizadoSecundario } from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import styles from "./TelaPerfilUsuarioStyles";
import React, { useEffect } from "react";

import api from "../../comum/servicos/api";
import {
  atualizarItemStorage,
  limparStorage,
  pegarItemStorage,
} from "../../comum/servicos/servicoStorage";
import { CHAVES_STORAGE } from "../../comum/constantes/chaves-storage";
import TELAS from "../../comum/constantes/telas";
import { useToast } from "native-base";

const TelaPerfilUsuario = (props) => {
  const toast = useToast();
  const [campoFotoPerfil, setCampoFotoPerfil] = React.useState(
    props.route.params?.usuario.foto_perfil || ""
  );
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
        const usuarioLogado = await pegarItemStorage(
          CHAVES_STORAGE.USUARIO_LOGADO
        );

        setCampoFotoPerfil(usuarioLogado.foto_perfil);
        setCampoNome(usuarioLogado.nome);
        setCampoCpf(usuarioLogado.cpf);
        setCampoEmail(usuarioLogado.email);
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
  };

  const salvarDados = async () => {
    try {
      const usuarioLogado = await pegarItemStorage(
        CHAVES_STORAGE.USUARIO_LOGADO
      );
      const dadosPerfil = {
        id_usuario: usuarioLogado.id_usuario,
        foto_perfil: campoFotoPerfil,
        nome: campoNome,
        cpf: campoCpf,
        email: campoEmail,
      };

      await api.put("/perfil", dadosPerfil);

      await atualizarItemStorage(CHAVES_STORAGE.USUARIO_LOGADO, dadosPerfil);
      console.log(dadosPerfil);

      // alert("Dados salvos com sucesso!");
      toast.show({
        description: "Dados salvos com sucesso!",
        placement: "top",
      });
    } catch (error) {
      // alert(error.response.data);
      toast.show({
        description: error.response.data,
        placement: "top",
      });
    }

    setCampoEditavel(false);
    setBotaoSalvar(false);
    setBotaoEditar(true);
    setBotaoExcluirConta(true);
    // alert("Dados salvos com sucesso!");
  };

  const sairConta = () => {
    limparStorage(CHAVES_STORAGE.USUARIO_LOGADO);
    props.navigation.navigate(TELAS.TELA_LOGIN);
  };

  // const excluirPerfilUsuario = async () => {
  //   try {
  //     if (confirm('Tem certeza?')) {
  //       await api.delete(`/usuarios/${props.route.params.usuario.id_usuario}`);
  //       alert('Usuário excluido com sucesso!');
  //       props.navigation.navigate(TELAS.TELA_BOAS_VINDAS, { refresh: +new Date() });
  //     }
  //   } catch (error) {
  //     alert(error.response.data);
  //   }
  // };

  // Atualizar editable -> readOnly
  // https://reactnative.dev/docs/textinput#readonly

  // implementar validacao de senha atual para criar nova senha

  // https://reactnative.dev/docs/textinput#onchangetext

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerImagem}>
          {!campoFotoPerfil && (
            <CampoImagem
              imagem={campoFotoPerfil}
              setImagem={setCampoFotoPerfil}
            />
          )}
          {campoFotoPerfil && (
            <CampoImagem
              imagem={campoFotoPerfil}
              setImagem={setCampoFotoPerfil}
            />
          )}
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
          value={campoCpf.toString()}
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
          editable={false}
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
            <BotaoCustomizado cor="primaria" onPress={sairConta}>
              Sair
            </BotaoCustomizado>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default TelaPerfilUsuario;
