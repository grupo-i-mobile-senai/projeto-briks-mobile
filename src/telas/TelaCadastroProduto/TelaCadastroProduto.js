import React from "react";
import { ScrollView, View } from "react-native";
import {
  CampoTextoCustomizadoSecundario,
  CampoTextoCustomizadoDescricao,
} from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import styles from "./TelaCadastroProdutoStyles";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";

// import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

// https://docs.expo.dev/versions/latest/sdk/imagepicker/
//https://docs.expo.dev/versions/v50.0.0/sdk/imagepicker/#enums
// import * as ImagePicker from "expo-image-picker";
import CampoImagem from "../../comum/componentes/CampoImagem/CampoImagem";
import apiCep from "../../comum/servicos/apiCep";
import api from "../../comum/servicos/api";
import TELAS from "../../comum/constantes/telas";

const TelaCadastroProduto = (props) => {
  const [campoImagem, setCampoImagem] = React.useState(undefined)
  const [campoTitulo, setCampoTitulo] = React.useState("");
  const [campoDescricao, setCampoDescricao] = React.useState("");
  const [campoCep, setCampoCep] = React.useState("");
  const [campoRua, setCampoRua] = React.useState("");
  const [campoBairro, setCampoBairro] = React.useState("");
  const [campoCidade, setCampoCidade] = React.useState("");

  const localizarCep = async () => {
    try {
      const response = await apiCep.get(`/${campoCep}`);
      setCampoRua(response.data.street);
      setCampoBairro(response.data.neighborhood);
      setCampoCidade(response.data.city);
    } catch (error) {
      console.log("Erro: " + error);
    }
    // try {
    //   const response = await apiCep.get(`/${campoCep}/json/`);
    //   setCampoRua(response.data.logradouro);
    //   setCampoBairro(response.data.bairro);
    //   setCampoCidade(response.data.localidade);
    // } catch (error) {
    //   console.log("Erro: " + error);
    // }
  };

  const salvarProduto = async () => {
    try {
      const produto = {
        id_produto: props.route.params?.produto.id_produto,
        foto_produto: campoImagem,
        titulo: campoTitulo,
        descricao: campoDescricao,
        cep: campoCep,
        rua: campoRua,
        bairro: campoBairro,
        cidade: campoCidade,
      };

      await api.post("/produtos", produto);
      alert("Anúncio cadastrado com sucesso!");
      props.navigation.navigate(TELAS.TELA_MEUS_ANUNCIOS, {refresh: +new Date()});
      // setCampoTitulo("");
      // setCampoDescricao("");
      // setCampoCep("");
      // setCampoRua("");
      // setCampoBairro("");
      // setCampoCidade("");
      // props.navigation.navigate(TELAS.TELA_MEUS_ANUNCIOS);
    } catch (error) {
      alert(error.response.data);
      console.log(error)
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.containerImagem}>
          <CampoImagem imagem={campoImagem} setImagem={setCampoImagem}/>
        </View>

        <CampoTextoCustomizadoSecundario
          label="Título"
          value={campoTitulo}
          onChangeText={setCampoTitulo}
        />

        <CampoTextoCustomizadoDescricao
          label="Descrição"
          multiline={true}
          rows={4}
          maxLength={100}
          value={campoDescricao}
          onChangeText={setCampoDescricao}
        />

        <View>
          <CampoTextoCustomizadoSecundario
            label="Localização"
            placeholder="CEP"
            inputMode="numeric"
            maxLength={8}
            value={campoCep}
            onChangeText={setCampoCep}
          />

          <BotaoCustomizado onPress={localizarCep} cor="secundaria">
            Buscar CEP
          </BotaoCustomizado>
        </View>

        <View>
          <CampoTextoCustomizadoSecundario
            placeholder="Rua"
            value={campoRua}
            onChangeText={() => setCampoRua()}
            // inputMode="numeric"
          />
          <CampoTextoCustomizadoSecundario
            placeholder="Bairro"
            value={campoBairro}
            onChangeText={() => setCampoBairro()}
            // inputMode="numeric"
          />
          <CampoTextoCustomizadoSecundario
            placeholder="Cidade"
            value={campoCidade}
            onChangeText={() => setCampoCidade()}
            // inputMode="numeric"
          />
        </View>

        {/* <BotaoCustomizado
          cor="primaria"
          onPress={() => {
            salvarProduto;
            alert("Seu anúncio foi cadastrado com sucesso!");
            props.navigation.navigate(TELAS.TELA_MEUS_ANUNCIOS);
          }}
        >
          Anunciar
        </BotaoCustomizado> */}

        <BotaoCustomizado
          cor="primaria"
          onPress={salvarProduto}
            
          
        >
          Anunciar
        </BotaoCustomizado>
      </View>
    </ScrollView>
  );
};

export default TelaCadastroProduto;
