import React, { useEffect, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import ListaVazia from "../../comum/componentes/ListaVazia/ListaVazia";
import SeparadorLista from "../../comum/componentes/SeparadorLista/SeparadorLista";
import ItemMeusAnuncios from "./ItemMeusAnuncios";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import TELAS from "../../comum/constantes/telas";
import styles from "./TelaMeusAnunciosStyles";
// import { CampoTextoCustomizadoPrimario } from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";

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
      const responseProdutos = await api.get("/produtos");
      const responseServicos = await api.get("/servicos");

      setMeusAnuncios(ordenarListagem([...responseProdutos.data, ...responseServicos.data]));
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
      <Pressable
        onPress={() => props.navigation.navigate(TELAS.TELA_CADASTRO_PRODUTO)}
      >
        <Text>Novo</Text>
      </Pressable>
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
    </View>
  );
};

export default TelaMeusAnuncios;
