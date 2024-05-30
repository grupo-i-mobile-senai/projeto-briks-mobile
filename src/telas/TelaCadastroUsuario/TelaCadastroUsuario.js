import { View } from "react-native";
import styles from "./TelaCadastroUsuarioStyles";
// import { ScrollView } from "react-native";
import { CampoTextoCustomizadoPrimario } from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import TELAS from "../../comum/constantes/telas";
import React from "react";

const TelaCadastroUsuario = (props) => {

  const [campoNome, setCampoNome] = React.useState('');
  const [campoCpf, setCampoCpf] = React.useState('');
  const [campoEmail, setCampoEmail] = React.useState('');
  const [campoSenha, setCampoSenha] = React.useState('');

  const cadastrar = async () => {
    try {
      const usuario = {
        nome: campoNome,
        cpf: campoCpf,
        email: campoEmail,
        senha: campoSenha,
      };

      await api.post('/usuarios', usuario);
      alert('Dados salvos com sucesso!');
      props.navigation.navigate(TELAS.TELA_LOGIN);
    } catch (error) {
      alert(error.response.data);
    }
  };  
  
  return (
    // <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <CampoTextoCustomizadoPrimario value={campoNome} label="Nome" onChangeText={setCampoNome}/>
        <CampoTextoCustomizadoPrimario value={campoCpf} label="CPF" onChangeText={setCampoCpf} inputMode="numeric" maxLength={11} />
        <CampoTextoCustomizadoPrimario value={campoEmail} label="Email" onChangeText={setCampoEmail} inputMode="email" />
        {/* <CampoTextoCustomizadoPrimario label="Telefone" inputMode="tel" /> */}
        {/* <CampoTextoCustomizadoPrimario label="CEP" inputMode="numeric" /> */}   
        <CampoTextoCustomizadoPrimario value={campoSenha} label="Senha" onChangeText={setCampoSenha} secureTextEntry />
        {/* <CampoTextoCustomizadoPrimario label="Confirmar Senha" secureTextEntry /> */}
        <BotaoCustomizado cor="primaria" onPress={cadastrar}>CADASTRAR</BotaoCustomizado>
        <BotaoCustomizado cor="secundaria" onPress={() => props.navigation.navigate(TELAS.TELA_LOGIN)}>ENTRAR</BotaoCustomizado>

      </View>
    // </ScrollView>
    
  );

};

export default TelaCadastroUsuario;
