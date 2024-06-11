import { FlatList, TextInput, View } from "react-native";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import TELAS from "../../comum/constantes/telas";
import styles from "./TelaListaAnuncioStyles";
import ListaVazia from "../../comum/componentes/ListaVazia/ListaVazia";
import SeparadorLista from "../../comum/componentes/SeparadorLista/SeparadorLista";
import { useEffect, useState } from "react";
import ItemMeusAnuncios from "../TelaMeusAnuncios/ItemMeusAnuncios";

import api from "../../comum/servicos/api";
import { CampoTextoCustomizadoSecundario } from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import ItemAnuncio from "./ItemAnuncio";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import CORES from "../../comum/constantes/cores";

const TelaListaAnuncio = (props) => {
  const [anuncios, setAnuncios] = useState([]);
  const [campoPesquisa, setCampoPesquisa] = useState("");
  const [resultadoPesquisa, setResultadoPesquisa] = useState("");
  console.log(campoPesquisa);

  //   useEffect(() => {

  //    const pegarProdutosViaApi = async () => {
  //       const response = await api.get('/produtos');
  //       setMeusAnuncios(response.data);
  //     };

  // pegarProdutosViaApi()

  //   }, [props.route.params?.refresh]);

  useEffect(() => {
    const pegarServicosViaApi = async () => {
      const response = await api.get("/servicos");
      setAnuncios(response.data);
    };

    pegarServicosViaApi();
  }, [props.route.params?.refresh]);

  //PESQUISAR ANUNCIO
  const pesquisarAnuncio = async () => {
    const response = await api.get(`/servicos/?filtro=${campoPesquisa}`);
    console.log(response.data);
    setResultadoPesquisa(response.data);
  };

  return (
    <View style={styles.container}>
      {/* https://reactnative.dev/docs/textinput   propriedades enterKeyHint */}
      <View style={styles.containerCampoPesquisa}>
        {/* <View> */}
        <TextInput
          style={styles.campoPesquisar}
          placeholder="Pesquisar"
          enterKeyHint="search"
          value={campoPesquisa}
          onChangeText={setCampoPesquisa}
        />
        {/* </View> */}

        <View style={styles.iconLimparCampo}>
          {campoPesquisa && (
            <FontAwesome6
              name="x"
              size={16}
              color={CORES.SILVER}
              onPress={() => setCampoPesquisa("")}
            />
          )}
        </View>

        <View style={styles.iconPesquisar}>
          <FontAwesome5
            name="search"
            size={24}
            color={CORES.SILVER}
            onPress={pesquisarAnuncio}
          />
        </View>
      </View>

      {/* COLOCAR CARD COM MEUS ANUNCIOS PUBLICADOS */}
      {/* <Pressable onPress={() => props.navigation.navigate(TELAS.TELA_CADASTRO_PRODUTO)}>
          <Text>Novo</Text>
        </Pressable>
        <FlatList
          data={meusAnuncios}
          // renderItem={ItemListagemUsuarios}
          renderItem={(props) => <ItemMeusAnuncios {...props} />}
          ListEmptyComponent={ListaVazia}
          ItemSeparatorComponent={SeparadorLista}
          keyExtractor={(item) => item.id_produto}
        /> */}

      {/* <Pressable onPress={() => props.navigation.navigate(TELAS.TELA_CADASTRO_SERVICO)}>
          <Text>Novo</Text>
        </Pressable> */}

      {/* <FlatList
        data={anuncios}
        // renderItem={ItemListagemUsuarios}
        renderItem={(props) => <ItemAnuncio {...props} />}
        ListEmptyComponent={ListaVazia}
        ItemSeparatorComponent={SeparadorLista}
        keyExtractor={(item) => item.id_servico}
        // inverted={-1}
      /> */}
      <FlatList
        data={resultadoPesquisa ? resultadoPesquisa : anuncios}
        // renderItem={ItemListagemUsuarios}
        renderItem={(props) => <ItemAnuncio {...props} />}
        ListEmptyComponent={ListaVazia}
        ItemSeparatorComponent={SeparadorLista}
        keyExtractor={(item) => item.id_servico}
        // inverted={-1}
      />

      {/* <BotaoCustomizado
        cor="secundaria"
        onPress={() => props.navigation.navigate(TELAS.TELA_ANUNCIO_DETALHADO)}
      >
        Simulando anúncio
      </BotaoCustomizado> */}
    </View>
  );
};

export default TelaListaAnuncio;
