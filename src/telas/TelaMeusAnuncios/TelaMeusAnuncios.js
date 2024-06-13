import React, { useEffect, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import ListaVazia from "../../comum/componentes/ListaVazia/ListaVazia";
import SeparadorLista from "../../comum/componentes/SeparadorLista/SeparadorLista";
import TELAS from "../../comum/constantes/telas";
import ItemMeusAnuncios from "./ItemMeusAnuncios";
import styles from "./TelaMeusAnunciosStyles";
// import { CampoTextoCustomizadoPrimario } from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import { Fab, Menu } from "native-base";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import api from "../../comum/servicos/api";

const ordenarListagem = (lista) => {
  return lista.sort((a, b) => {
    return +new Date(a.dt_alteracao) - +new Date(b.dt_alteracao);
  });
};

const TelaMeusAnuncios = (props) => {
  const [meusAnuncios, setMeusAnuncios] = useState([]);

  useEffect(() => {
    const pegarProdutosEServicosViaApi = async () => {
      const responseProdutos = await api.get(`/meus-produtos`);
      const responseServicos = await api.get("/meus-servicos");

      setMeusAnuncios(
        ordenarListagem([...responseProdutos.data, ...responseServicos.data])
      );
    };

    pegarProdutosEServicosViaApi();
  }, [props.route.params?.refresh]);

  // useEffect(() => {
  //   const pegarServicosViaApi = async () => {
  //     const response = await api.get("/servicos");
  //     setMeusAnuncios((prev) => ordenarListagem([...prev, ...response.data]));
  //   };

  //   pegarServicosViaApi();
  // }, [props.route.params?.refresh]);

  return (
    <View style={styles.container}>
      {/* COLOCAR CARD COM MEUS ANUNCIOS PUBLICADOS */}
     
      <FlatList
        data={meusAnuncios}
        // renderItem={ItemListagemUsuarios}
        renderItem={(props) => <ItemMeusAnuncios {...props} />}
        ListEmptyComponent={ListaVazia}
        ItemSeparatorComponent={SeparadorLista}
        keyExtractor={(item) => item.dt_alteracao}
      />

      <BotaoCustomizado
        cor="secundaria"
        onPress={() => props.navigation.navigate(TELAS.TELA_PRINCIPAL)}
      >
        Tela Principal
      </BotaoCustomizado>
      <Menu
        w="160"
        mr="4"
        mb="2"
        trigger={(triggerProps) => {
          return (
            <Fab
              renderInPortal={false}
              right={4}
              bottom={20}
              size="16"
              shadow={2}
              icon={<FontAwesome6 name="plus" size={24} />}
              {...triggerProps}
            />
          );
        }}
      >
        <Menu.Item
          onPress={() => props.navigation.navigate(TELAS.TELA_CADASTRO_PRODUTO)}
        >
          Novo Produto
        </Menu.Item>
        <Menu.Item
          onPress={() => props.navigation.navigate(TELAS.TELA_CADASTRO_SERVICO)}
        >
          Novo Serviço
        </Menu.Item>
      </Menu>
    </View>
  );
};

export default TelaMeusAnuncios;
