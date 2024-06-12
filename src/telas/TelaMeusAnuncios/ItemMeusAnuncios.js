import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CORES from "../../comum/constantes/cores";
import TELAS from "../../comum/constantes/telas";
import React from "react";
import CampoImagem from "../../comum/componentes/CampoImagem/CampoImagem";
// import styles from "../../comum/componentes/CampoImagem/CampoImagemStyles";

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: CORES.BRANCA,
    borderRadius: 16,
    padding: 16,
    // flexDirection: "row",
  },
  titulo: {
    fontSize: 20,
  },

  tamanhoImgItem: {
    height: 20,
    width: 20,
  },
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
            {/* <CampoImagem  /> */}
            <Text style={styles.titulo}>{props.item.titulo}</Text>
            <Text>{props.item.bairro}</Text>
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
            <Text style={styles.titulo}>{props.item.titulo}</Text>
            <Text>{props.item.regiao}</Text>
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default ItemMeusAnuncios;
