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

const TelaCadastroServico = (props) => {
  const [campoRegiao, setCampoRegiao] = React.useState();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerImagem}>
          <CampoImagem />
        </View>

        <CampoTextoCustomizadoSecundario label="Título" />

        <CampoTextoCustomizadoDescricao
          label="Descrição"
          multiline={true}
          rows={4}
          maxLength={100}
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
          />
        </View>

        <BotaoCustomizado
          cor="primaria"
          onPress={() => {
            alert("Seu anúncio foi cadastrado com sucesso!");
            props.navigation.navigate(TELAS.TELA_MEUS_ANUNCIOS);
          }}
        >
          Anunciar
        </BotaoCustomizado>
      </View>
    </ScrollView>
  );
};

export default TelaCadastroServico;
