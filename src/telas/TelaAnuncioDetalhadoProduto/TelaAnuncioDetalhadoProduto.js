import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import styles from "./TelaAnuncioDetalhadoProdutoStyles";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";

import React, { useEffect } from "react";
import stylesModal from "../../comum/constantes/ModalChatStyles";
import CORES from "../../comum/constantes/cores";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import ItemAnuncio from "../TelaListaAnuncio/ItemAnuncio";

import {
  CampoTextoCustomizadoDescricao,
  CampoTextoCustomizadoSecundario,
} from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";

import CampoImagem from "../../comum/componentes/CampoImagem/CampoImagem";

import api from '../../comum/servicos/api'

const TelaAnuncioDetalhadoProduto = (props) => {
  const [modalVisivel, setModalVisivel] = React.useState(false);

  const [idProduto, setIdProduto] = React.useState(props.route.params?.produto.id_produto || "");

  const [campoAnunciante, setCampoAnunciante] = React.useState(''
  );

  const [campoFoto, setCampoFoto] = React.useState(
    props.route.params?.produto.foto_produto || ""
  );
  const [campoTitulo, setCampoTitulo] = React.useState(
    props.route.params?.produto.titulo || ""
  );
  const [campoDescricao, setCampoDescricao] = React.useState(
    props.route.params?.produto.descricao || ""
  );
  const [campoCep, setCampoCep] = React.useState(
    props.route.params?.produto.cep || ""
  );
  const [campoRua, setCampoRua] = React.useState(
    props.route.params?.produto.rua || ""
  );
  const [campoBairro, setCampoBairro] = React.useState(
    props.route.params?.produto.bairro || ""
  );
  const [campoCidade, setCampoCidade] = React.useState(
    props.route.params?.produto.cidade || ""
  );

  useEffect(() => {
    const pegaNomeAnuncianteViaApi = async () => {
      const responseAnunciante = await api(`/produtos/${idProduto}`);
      setCampoAnunciante(responseAnunciante.data[0].nome)
      console.log(responseAnunciante.data[0].nome)
    };
    pegaNomeAnuncianteViaApi()
  }, [props.route.params?.refresh]);

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

        <Text>Anunciante: {campoAnunciante}</Text>
      <ScrollView>
        <View style={styles.containerImagem}>
          {/* <CampoImagem imagem={campoFoto} setImagem={setCampoFoto} readyOnly/> */}
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
          <Text style={styles.subTitulo}>Localização</Text>
          <Text style={styles.texto}>CEP: {campoCep}</Text>
          <Text style={styles.texto}>Rua: {campoRua}</Text>
          <Text style={styles.texto}>Bairro: {campoBairro}</Text>
          <Text style={styles.texto}>Cidade: {campoCidade}</Text>
        </View>
        {/* {campoBairro && (
            <View>
              <Text style={styles.subTitulo}>Bairros</Text>
              <Text style={styles.texto}>{campoBairro}</Text>
            </View>
          )} */}
      </ScrollView>

      {/* BOTÃO PARA ABRIR O MODAL */}
      <BotaoCustomizado cor="secundaria" onPress={() => setModalVisivel(true)}>
        FAZER PROPOSTA
      </BotaoCustomizado>
    </View>
  );
};

export default TelaAnuncioDetalhadoProduto;
