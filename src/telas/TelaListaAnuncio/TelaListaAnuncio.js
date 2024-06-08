import { FlatList, View } from "react-native";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import TELAS from "../../comum/constantes/telas";
import styles from "./TelaListaAnuncioStyles";
import ListaVazia from "../../comum/componentes/ListaVazia/ListaVazia";
import SeparadorLista from "../../comum/componentes/SeparadorLista/SeparadorLista";
import { useEffect, useState } from "react";
import ItemMeusAnuncios from "../TelaMeusAnuncios/ItemMeusAnuncios";

import api from '../../comum/servicos/api'
import { CampoTextoCustomizadoSecundario } from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import ItemAnuncio from "./ItemAnuncio";

const TelaListaAnuncio = (props) => {
  const [anuncios, setAnuncios]= useState([]);

  //   useEffect(() => {
  
  //    const pegarProdutosViaApi = async () => {
  //       const response = await api.get('/produtos');
  //       setMeusAnuncios(response.data);
  //     };
  
  // pegarProdutosViaApi()
  
  //   }, [props.route.params?.refresh]);
  
    useEffect(() => {
  
     const pegarServicosViaApi = async () => {
        const response = await api.get('/servicos');
        setAnuncios(response.data);
      };
  
  pegarServicosViaApi()
  
    }, [props.route.params?.refresh]);
  
    return (
      <View style={styles.container}>
        <CampoTextoCustomizadoSecundario/>
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


        <FlatList
          data={anuncios}
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
