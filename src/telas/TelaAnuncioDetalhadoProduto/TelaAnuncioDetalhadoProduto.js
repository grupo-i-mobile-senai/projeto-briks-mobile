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
  
  import React from "react";
  import stylesModal from "../../comum/constantes/ModalChatStyles";
  import CORES from "../../comum/constantes/cores";
  
  import MaterialIcons from "@expo/vector-icons/MaterialIcons";
  import ItemAnuncio from "../TelaListaAnuncio/ItemAnuncio";
  
  import {
    CampoTextoCustomizadoDescricao,
    CampoTextoCustomizadoSecundario,
  } from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
 
  
  import CampoImagem from "../../comum/componentes/CampoImagem/CampoImagem";
  
  const TelaAnuncioDetalhadoProduto = (props) => {
    const [modalVisivel, setModalVisivel] = React.useState(false);
  
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
            <CampoImagem imagem={campoFoto} setImagem={setCampoFoto} readyOnly/>
            {/* <Image source={{ uri: campoFoto }} /> */}
          </View>
          <Text style={styles.titulo}>{campoTitulo}</Text>
          <Text style={styles.subTitulo}>Descrição</Text>
          <Text style={styles.texto}>{campoDescricao}</Text>
          <Text style={styles.subTitulo}>Localização</Text>
          <Text style={styles.texto}>CEP: {campoCep}</Text>
          <Text style={styles.texto}>Rua: {campoRua}</Text>
          <Text style={styles.texto}>Bairro: {campoBairro}</Text>
          <Text style={styles.texto}>Cidade: {campoCidade}</Text>
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
  