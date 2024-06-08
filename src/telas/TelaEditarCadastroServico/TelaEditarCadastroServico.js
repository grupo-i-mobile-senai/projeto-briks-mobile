import { ScrollView, View, Text, Image } from "react-native";
// import CampoImagem from "../../comum/componentes/CampoImagem/CampoImagem";
import styles from "./TelaEditarCadastroServicoStyles";
import {
  CampoTextoCustomizadoDescricao,
  CampoTextoCustomizadoSecundario,
} from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import React from "react";

import RNPickerSelect from "react-native-picker-select";
import pickerSelectStyles from "../../comum/constantes/pickerSelectStyles";
import TELAS from "../../comum/constantes/telas";

import api from "../../comum/servicos/api";

const TelaEditarCadastroServico = (props) => {
  const [campoFoto, setCampoFoto] = React.useState(
    props.route.params?.servico.foto_servico || ""
  );
  const [campoTitulo, setCampoTitulo] = React.useState(
    props.route.params?.servico.titulo || ""
  );
  const [campoDescricao, setCampoDescricao] = React.useState(
    props.route.params?.servico.descricao || ""
  );
  const [campoRegiao, setCampoRegiao] = React.useState(
    props.route.params?.servico.regiao || ""
  );
  const [campoBairro, setCampoBairro] = React.useState(
    props.route.params?.servico.bairro || ""
  );

  //   const salvarServicoEditado = async () => {
  //     try {
  //       const servico = {
  //         titulo: campoTitulo,
  //         descricao: campoDescricao,
  //         regiao: campoRegiao,
  //         bairro: campoBairro,
  //       };

  //       await api.post("/servicos", servico);
  //       alert("Anúncio cadastrado com sucesso!");
  //       setCampoTitulo("");
  //       setCampoDescricao("");
  //       setCampoRegiao("");
  //       setCampoBairro("");

  //       props.navigation.navigate(TELAS.TELA_MEUS_ANUNCIOS);
  //     } catch (error) {
  //       alert(error.response.data);
  //     }
  //   };
  /////////////////////////////////////////////////////////////////////////////////////////////
  const salvarServicoEditado = async () => {
    try {
      const servico = {
        id_servico: props.route.params?.servico.id_servico,
        foto_servico: campoFoto,
        titulo: campoTitulo,
        descricao: campoDescricao,
        regiao: campoRegiao,
        bairro: campoBairro,
        // cidade: campoCidade,
      };

      if (props.route.params?.servico.id_servico) {
        await api.put("/servicos", servico);
      } else {
        await api.post("/servicos", servico);
      }
      alert("Dados salvos com sucesso!");
      props.navigation.navigate(TELAS.TELA_MEUS_ANUNCIOS, {
        refresh: +new Date(),
      });
    } catch (error) {
      alert(error.response.data);
    }
  };

  const excluirServico = async () => {
    try {
      if (confirm(`Deseja excluir o anúncio?`)) {
        await api.delete(`/servicos/${props.route.params.servico.id_servico}`);
        alert("Anúncio excluido com sucesso!");
        props.navigation.navigate(TELAS.TELA_MEUS_ANUNCIOS, {
          refresh: +new Date(),
        });
      }
    } catch (error) {
      alert(error.response.data);
    }
  };
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerImagem}>
          {/* <CampoImagem value={campoFoto} onChangeText={setCampoFoto}/> */}
          <Image source={{ uri: campoFoto }} />
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
          <Text>Região atendida</Text>
          {/* <CampoTextoCustomizadoSecundario
            label="Região atendida"
            placeholder="CEP"
            inputMode="numeric"
            maxLength={8}
          /> */}
        </View>

        <RNPickerSelect
          placeholder={{ label: "Selecione uma região", value: "" }}
          style={pickerSelectStyles}
          onValueChange={setCampoRegiao}
          value={campoRegiao}
          items={[
            { label: "Toda Florianópolis", value: "Toda Florianópolis" },
            { label: "Norte da Ilha", value: "Norte da Ilha" },
            { label: "Sul da Ilha", value: "Sul da Ilha" },
            { label: "Leste da Ilha", value: "Leste da Ilha" },
            { label: "Oeste da Ilha", value: "Oeste da Ilha" },
          ]}
        />

        <View>
          <CampoTextoCustomizadoDescricao
            //   label="Bairros (Opcional)"
            placeholder="Informe os Bairros (Opcional)"
            multiline={true}
            rows={4}
            maxLength={100}
            value={campoBairro}
            onChangeText={setCampoBairro}
          />
        </View>

        {/* <BotaoCustomizado
          cor="primaria"
          onPress={() => {
            alert("Seu anúncio foi cadastrado com sucesso!");
            props.navigation.navigate(TELAS.TELA_MEUS_ANUNCIOS);
          }}
        >
          Anunciar
        </BotaoCustomizado> */}

        <BotaoCustomizado cor="primaria" onPress={salvarServicoEditado}>
          Salvar
        </BotaoCustomizado>

        <BotaoCustomizado cor="secundaria" onPress={excluirServico}>
          Excluir
        </BotaoCustomizado>
      </View>
    </ScrollView>
  );
};

export default TelaEditarCadastroServico;
