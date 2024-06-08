import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
  Image
} from "react-native";
import styles from "./TelaAnuncioDetalhadoStyles";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";

import React from "react";
import stylesModal from "../../comum/constantes/ModalChatStyles";
import CORES from "../../comum/constantes/cores";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import TelaEditarCadastroServico from "../TelaEditarCadastroServico/TelaEditarCadastroServico";
// import ItemAnuncio from "../TelaListaAnuncio/ItemAnuncio";

import { CampoTextoCustomizadoDescricao, CampoTextoCustomizadoSecundario } from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";

import RNPickerSelect from "react-native-picker-select";
import pickerSelectStyles from "../../comum/constantes/pickerSelectStyles";

import CampoImagem from "../../comum/componentes/CampoImagem/CampoImagem";



const TelaAnuncioDetalhado = (props) => {
  const [modalVisivel, setModalVisivel] = React.useState(false);

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


  return (
    <View style={styles.container}>
      {/* MODAL PROPOSTA */}
      <Modal animationType="fade" transparent={true} visible={modalVisivel}>
        <View style={stylesModal.centeredView}>
          <View style={stylesModal.modalView}>
            {/* CABECALHO */}
            <View style={stylesModal.cabecalhoChat}>
              <Pressable onPress={() => setModalVisivel(false)}>
                <MaterialIcons name="arrow-drop-down" size={48} />
              </Pressable>
            </View>
            {/* CABECALHO */}
            {/* CORPO */}
            <View style={stylesModal.corpoChat}>
              <ScrollView>
                <Text></Text>
              </ScrollView>
            </View>
            {/* CORPO */}

            {/* RODAPE */}
            <View style={stylesModal.rodapeChat}>
              <View style={stylesModal.rodapeChatCampo}>
                <TextInput
                  placeholder="Mensagem"
                  multiline={true}
                  maxLength={100}
                  cursorColor={CORES.LARANJA}
                />
              </View>

              <View style={stylesModal.rodapeChatBotao}>
                <MaterialIcons
                  name="send"
                  size={32}
                  color={CORES.PRIMARIA}
                  onPress={() => alert("Estou funcionando")}
                />
              </View>
            </View>
            {/* RODAPE */}
          </View>
        </View>
      </Modal>
      {/* FIM MODAL PROPOSTA */}

<View style={styles.containerImagem}>
          <CampoImagem />
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
   




      {/* BOTÃO PARA ABRIR O MODAL */}
      <BotaoCustomizado cor="secundaria" onPress={() => setModalVisivel(true)}>
        FAZER PROPOSTA
      </BotaoCustomizado>
    </View>
  );
};

export default TelaAnuncioDetalhado;
