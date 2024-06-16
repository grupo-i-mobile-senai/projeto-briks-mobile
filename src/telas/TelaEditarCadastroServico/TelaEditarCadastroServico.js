import { ScrollView, View, Text, Image } from "react-native";
import CampoImagem from "../../comum/componentes/CampoImagem/CampoImagem";
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
import ModalConfirm from "../../comum/componentes/Modal/ModalConfirm/ModalConfirm";
// import { useToast } from "native-base";
import { Box, Center, CheckIcon, useToast, Select } from "native-base";

const TelaEditarCadastroServico = (props) => {
  const toast = useToast();

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

  const [abrirModal, setAbrirModal] = React.useState(false);

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
      // alert("Dados salvos com sucesso!");
      toast.show({
        description: "Dados salvos com sucesso!",
        placement: "top",
      });
      props.navigation.navigate(TELAS.TELA_MEUS_ANUNCIOS, {
        refresh: +new Date(),
      });
    } catch (error) {
      // alert(error.response.data);
      toast.show({
        description: error.response.data,
        placement: "top",
      });
    }
  };

  const excluirServico = async () => {
    setAbrirModal(true);
  };

  const confirmarExclusao = async () => {
    try {
      await api.delete(`/servicos/${props.route.params.servico.id_servico}`);
      // alert("Anúncio excluido com sucesso!");
      toast.show({
        description: "Anúncio excluído com sucesso!",
        placement: "top",
      });
      setAbrirModal(false);
      props.navigation.navigate(TELAS.TELA_MEUS_ANUNCIOS, {
        refresh: +new Date(),
      });
    } catch (error) {
      // alert(error.response.data);
      toast.show({
        description: error.response.data,
        placement: "top",
      });
    }
  };

  const fecharModal = () => {
    setAbrirModal(false); // Fechar o modal se o usuário cancelar a exclusão
  };
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerImagem}>
          <CampoImagem imagem={campoFoto} setImagem={setCampoFoto} />
          {/* <Image source={{ uri: campoFoto }} /> */}
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

        {/* <RNPickerSelect
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
        /> */}

        <Center>
          <Box width="100%" maxW="300" >
            <Select
              selectedValue={campoRegiao}
              minWidth="200"
              placeholder="Selecione uma região"
              onValueChange={(itemValue) => setCampoRegiao(itemValue)}
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              accessibilityLabel="Selecione uma região"
              style={styles.itemSelect}
            >
              <Select.Item
                label="Toda Florianópolis"
                value="Toda Florianópolis"
                style={styles.itemSelect}
              />
              <Select.Item label="Norte da Ilha" value="Norte da Ilha" />
              <Select.Item label="Sul da Ilha" value="Sul da Ilha" />
              <Select.Item label="Leste da Ilha" value="Leste da Ilha" />
              <Select.Item label="Oeste da Ilha" value="Oeste da Ilha" />
            </Select>
          </Box>
        </Center>

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

        <ModalConfirm
          isOpen={abrirModal}
          onClose={fecharModal}
          onConfirm={confirmarExclusao}
        />
      </View>
    </ScrollView>
  );
};

export default TelaEditarCadastroServico;
