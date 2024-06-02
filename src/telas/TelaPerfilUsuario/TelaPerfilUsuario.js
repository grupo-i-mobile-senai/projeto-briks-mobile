import { ScrollView, TextInput, View } from "react-native";
import CampoImagem from "../../comum/componentes/CampoImagem/CampoImagem";
import { CampoTextoCustomizadoSecundario } from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import styles from "./TelaPerfilUsuarioStyles";
import React from "react";

// import api from "../../comum/servicos/api";

const TelaPerfilUsuario = () => {
  const [campoNome, setCampoNome] = React.useState("");
  const [campoCpf, setCampoCpf] = React.useState("");
  const [campoEmail, setCampoEmail] = React.useState("");
  const [campoSenha, setCampoSenha] = React.useState("");

  const [campoEditavel, setCampoEditavel] = React.useState(false);

  const [botaoEditar, setBotaoEditar] = React.useState(true);
  const [botaoSalvar, setBotaoSalvar] = React.useState(false);
  const [botaoExcluirConta, setBotaoExcluirConta] = React.useState(true);

  const editarCampos = () => {
    setCampoEditavel(true);
    setBotaoSalvar(true);
    setBotaoEditar(false);
    setBotaoExcluirConta(false);
  };

  const salvarDados = () => {
    setCampoEditavel(false);
    setBotaoSalvar(false);
    setBotaoEditar(true);
    setBotaoExcluirConta(true);
    alert("Dados salvos com sucesso!");
  };

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
          onChangeText={setCampoNome}
        />

        <CampoTextoCustomizadoSecundario
          label="CPF"
          inputMode="numeric"
          value={campoCpf}
          editable={false}
          maxLength={11}
          onChangeText={setCampoCpf}
        />

        <CampoTextoCustomizadoSecundario
          label="Email"
          inputMode="email"
          value={campoEmail}
          editable={campoEditavel}
          onChangeText={setCampoEmail}
        />

        <CampoTextoCustomizadoSecundario
          label="Senha"
          secureTextEntry
          value={campoSenha}
          editable={false}
          onChangeText={setCampoSenha}
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
