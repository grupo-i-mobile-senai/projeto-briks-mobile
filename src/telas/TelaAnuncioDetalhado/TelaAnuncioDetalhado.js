import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import styles from "./TelaAnuncioDetalhadoStyles";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";

import React from "react";
import stylesModal from "../../comum/constantes/ModalChatStyles";
import CORES from "../../comum/constantes/cores";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const TelaAnuncioDetalhado = () => {
  const [modalVisivel, setModalVisivel] = React.useState(false);

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

      {/* BOTÃO PARA ABRIR O MODAL */}
      <BotaoCustomizado cor="secundaria" onPress={() => setModalVisivel(true)}>
        FAZER PROPOSTA
      </BotaoCustomizado>
    </View>
  );
};

export default TelaAnuncioDetalhado;
