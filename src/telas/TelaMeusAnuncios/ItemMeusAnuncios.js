import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import CORES from "../../comum/constantes/cores";
import TELAS from "../../comum/constantes/telas";
import React from "react";
// import CampoImagem from "../../comum/componentes/CampoImagem/CampoImagem";
// import styles from "../../comum/componentes/CampoImagem/CampoImagemStyles";

const styles = StyleSheet.create({
  container: {
    height: 104,
    backgroundColor: CORES.BRANCA,
    borderRadius: 8,
    padding: 16,
    flexDirection:'row',
    gap:16,
    alignItems:'center'
    // flexDirection: "row",
  },
  titulo: {
    fontSize: 20,
  },

  // tamanhoImgItem: {
  //   height: 20,
  //   width: 20,
  // },
});

const ItemMeusAnuncios = (props) => {
  // const [campoFoto, setCampoFoto] = React.useState(props.route.params?.produto.foto_produto || "");
  const navigation = useNavigation();

  return (
    <View>
      {props.item.id_produto && (
        <Pressable
          onPress={() =>
            navigation.navigate(TELAS.TELA_EDITAR_CADASTRO_PRODUTO, {
              produto: props.item,
            })
          }
        >
          <View style={styles.container}>
          <Image source={{ uri: props.item.foto_produto }} style={{width: 48, height: 48}}/>
          <View>
            <Text style={styles.titulo}>{props.item.titulo}</Text>
            <Text>{props.item.bairro}</Text>
           
          </View>
          </View>
        </Pressable>
      )}

      {props.item.id_servico && (
        <Pressable
          onPress={() =>
            navigation.navigate(TELAS.TELA_EDITAR_CADASTRO_SERVICO, {
              servico: props.item,
            })
          }
        >
          <View style={styles.container}>
          <Image source={{ uri: props.item.foto_servico }} style={{width: 56, height: 56}}/>
          <View>
            <Text style={styles.titulo}>{props.item.titulo}</Text>
            <Text>{props.item.regiao}</Text>
          </View>
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default ItemMeusAnuncios;
