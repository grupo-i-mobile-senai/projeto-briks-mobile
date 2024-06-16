import { ScrollView, View, Text } from "react-native";
import CampoImagem from "../../comum/componentes/CampoImagem/CampoImagem";
import styles from "./TelaCadastroServicoStyles";
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

import { Box, Center, CheckIcon, useToast, Select } from "native-base";

const TelaCadastroServico = (props) => {
  const toast = useToast();
  const [campoImagem, setCampoImagem] = React.useState(undefined);
  const [campoTitulo, setCampoTitulo] = React.useState("");
  const [campoDescricao, setCampoDescricao] = React.useState("");
  const [campoRegiao, setCampoRegiao] = React.useState();
  const [campoBairro, setCampoBairro] = React.useState("");

  const salvarServico = async () => {
    try {
      const servico = {
        foto_servico: campoImagem,
        titulo: campoTitulo,
        descricao: campoDescricao,
        regiao: campoRegiao,
        bairro: campoBairro,
      };

      await api.post("/servicos", servico);
      // alert("Anúncio cadastrado com sucesso!");
      toast.show({
        description: "Anúncio cadastrado com sucesso!",
        placement: "top",
      });

      setCampoTitulo("");
      setCampoDescricao("");
      setCampoRegiao("");
      setCampoBairro("");

      props.navigation.navigate(TELAS.TELA_PRINCIPAL, {
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

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerImagem}>
          <CampoImagem imagem={campoImagem} setImagem={setCampoImagem} />
        </View>

        <CampoTextoCustomizadoSecundario
          label="Título"
          value={campoTitulo}
          maxLength={20}
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
          <Text style={styles.texto}>Região atendida</Text>
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
          <Box width="100%" maxW="300">
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

        <BotaoCustomizado cor="primaria" onPress={salvarServico}>
          Anunciar
        </BotaoCustomizado>
      </View>
    </ScrollView>
  );
};

export default TelaCadastroServico;
