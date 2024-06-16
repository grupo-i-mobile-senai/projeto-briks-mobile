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

const ordenarListagem = (lista) => {
  return lista.sort((a, b) => {
    return +new Date(a.dt_alteracao) - +new Date(b.dt_alteracao);
  });
};

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

  // useEffect(() => {
  //   const pegarServicosViaApi = async () => {
  //     const response = await api.get("/servicos");
  //     setAnuncios(response.data);
  //   };

  //   pegarServicosViaApi();
  // }, [props.route.params?.refresh]);

  useEffect(() => {
    const pegarProdutosEServicosViaApi = async () => {
      const responseProdutos = await api.get("/produtos");
      const responseServicos = await api.get("/servicos");

      setAnuncios(
        ordenarListagem([...responseProdutos.data, ...responseServicos.data])
      );
    };

    pegarProdutosEServicosViaApi();
  }, [props.route.params?.refresh]);

  //PESQUISAR ANUNCIO
  const pesquisarAnuncio = async () => {
    const responseBuscaServico = await api.get(
      `/servicos/?filtro=${campoPesquisa}`
    );
    // console.log(responseBuscaServico.data);
    // setResultadoPesquisa(responseBuscaServico.data);

    const responseBuscaProduto = await api.get(
      `/produtos/?filtro=${campoPesquisa}`
    );
    // console.log(responseBuscaProduto.data);
    // setResultadoPesquisa(responseBuscaProduto.data);

    setResultadoPesquisa([
      ...responseBuscaProduto.data,
      ...responseBuscaServico.data,
    ]);

    // const responseBuscaAnuncio = await api.get(`/?filtro=${campoPesquisa}`);
    // setResultadoPesquisa(responseBuscaAnuncio.data);
  };

  const limparCampoPesquisa = () => {
    setCampoPesquisa("");
    setResultadoPesquisa([...anuncios]);
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
              size={24}
              color={CORES.SILVER}
              onPress={limparCampoPesquisa}
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

      <FlatList
        data={resultadoPesquisa ? resultadoPesquisa : anuncios}
        // renderItem={ItemListagemUsuarios}
        renderItem={(props) => <ItemAnuncio {...props} />}
        ListEmptyComponent={ListaVazia}
        ItemSeparatorComponent={SeparadorLista}
        keyExtractor={(item) => item.dt_alteracao}
      />
    </View>
  );
};

export default TelaListaAnuncio;
