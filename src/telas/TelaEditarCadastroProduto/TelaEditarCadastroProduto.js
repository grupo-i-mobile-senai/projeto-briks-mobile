
import React from "react";
import { ScrollView, View } from "react-native";
import {
  CampoTextoCustomizadoSecundario,
  CampoTextoCustomizadoDescricao,
} from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";

import styles from "./TelaEditarCadastroProdutoStyles";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";

// import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

// https://docs.expo.dev/versions/latest/sdk/imagepicker/
//https://docs.expo.dev/versions/v50.0.0/sdk/imagepicker/#enums
// import * as ImagePicker from "expo-image-picker";
import CampoImagem from "../../comum/componentes/CampoImagem/CampoImagem";
import apiCep from "../../comum/servicos/apiCep";
import api from '../../comum/servicos/api'
import TELAS from "../../comum/constantes/telas";

const TelaEditarCadastroProduto = (props) => {
  const [campoTitulo, setCampoTitulo] = React.useState(props.route.params?.produto.titulo || '');
  const [campoDescricao, setCampoDescricao] = React.useState(props.route.params?.produto.descricao || '');
  const [campoCep, setCampoCep] = React.useState(props.route.params?.produto.cep || '');
  const [campoRua, setCampoRua] = React.useState(props.route.params?.produto.rua || '');
  const [campoBairro, setCampoBairro] = React.useState(props.route.params?.produto.bairro || '');
  const [campoCidade, setCampoCidade] = React.useState(props.route.params?.produto.cidade || '');

  const localizarCep = async () => {
    try {
      const response = await apiCep.get(`/${campoCep}`);
      setCampoRua(response.data.street);
      setCampoBairro(response.data.neighborhood);
      setCampoCidade(response.data.city);
    } catch (error) {
      console.log("Erro: " + error);
    }
  };

  const salvarProdutoEditado = async () => {
    try {
      const produto = {
        id_produto: props.route.params?.produto.id_produto,
        titulo: campoTitulo,
        descricao: campoDescricao,
        cep: campoCep,
        rua: campoRua,
        bairro: campoBairro,
        cidade: campoCidade,
      };
      
     

      if (props.route.params?.produto.id_produto) {
        await api.put('/produtos', produto);
        
      } else {
        await api.post('/produtos', produto);
      }
      alert('Dados salvos com sucesso!');
      props.navigation.navigate(TELAS.TELA_MEUS_ANUNCIOS, { refresh: +new Date() });
    } catch (error) {
      alert(error.response.data);
    }
  };

  const excluirProduto = async () => {
    try {
      if (confirm(`Deseja excluir o anúncio?`)) {
        await api.delete(`/produtos/${props.route.params.produto.id_produto}`);
        alert('Anúncio excluido com sucesso!');
        props.navigation.navigate(TELAS.TELA_MEUS_ANUNCIOS, { refresh: +new Date() });
      }
    } catch (error) {
      alert(error.response.data);
    }
  };



  //     await api.post("/produtos", produto);
  //     alert("Anúncio cadastrado com sucesso!");
  //     props.navigation.navigate(TELAS.TELA_MEUS_ANUNCIOS, {refresh: +new Date()});
  //     // setCampoTitulo("");
  //     // setCampoDescricao("");
  //     // setCampoCep("");
  //     // setCampoRua("");
  //     // setCampoBairro("");
  //     // setCampoCidade("");
  //     // props.navigation.navigate(TELAS.TELA_MEUS_ANUNCIOS);
  //   } catch (error) {
  //     alert(error.response.data);
  //     console.log(error)
  //   }
  // };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerImagem}>
          <CampoImagem />
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
          cor="primaria" onPress={salvarProdutoEditado}>
          Salvar
        </BotaoCustomizado>

        <BotaoCustomizado
          cor="secundaria" onPress={excluirProduto}>
          Excluir
        </BotaoCustomizado>
      </View>
    </ScrollView>
  );
};

export default TelaEditarCadastroProduto;