import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";

import styles from "./TelaAnuncioDetalhadoServicoStyles";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";

import React from "react";
import stylesModal from "../../comum/constantes/ModalChatStyles";
import CORES from "../../comum/constantes/cores";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import ItemAnuncio from "../TelaListaAnuncio/ItemAnuncio";

import CampoImagem from "../../comum/componentes/CampoImagem/CampoImagem";

const TelaAnuncioDetalhadoServico = (props) => {
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

      <ScrollView>
        <View style={styles.containerImagem}>
          {/* <CampoImagem imagem={campoFoto} setImagem={setCampoFoto} readyOnly /> */}
          <Image
            source={{ uri: campoFoto }}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <View style={styles.dadosAnuncio}>
          <Text style={styles.titulo}>{campoTitulo}</Text>
        </View>
        <View style={styles.dadosAnuncio}>
          <Text style={styles.subTitulo}>Descrição</Text>
          <Text style={styles.texto}>{campoDescricao}</Text>
        </View>
        <View style={styles.dadosAnuncio}>
          <Text style={styles.subTitulo}>Região atendida</Text>
          <Text style={styles.texto}>{campoRegiao}</Text>
          {campoBairro && (
            <View>
              <Text style={styles.subTitulo}>Bairros</Text>
              <Text style={styles.texto}>{campoBairro}</Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* BOTÃO PARA ABRIR O MODAL */}
      <BotaoCustomizado cor="secundaria" onPress={() => setModalVisivel(true)}>
        FAZER PROPOSTA
      </BotaoCustomizado>
    </View>
  );
};

export default TelaAnuncioDetalhadoServico;
