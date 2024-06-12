import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CORES from "../../comum/constantes/cores";
import TELAS from "../../comum/constantes/telas";
import { useState } from "react";

const styles = StyleSheet.create({
  container: {
    height: 88,
    backgroundColor: CORES.BRANCA,
    borderRadius: 16,
    padding: 16,
  },
  titulo: {
    fontSize: 20,
  },
});

const ItemMeusAnuncios = (props) => {
  // const [tipoAnuncio, setTipoAnuncio] = useState(null);

  // const itemTipoAnuncio = () =>{
  //   if (tipoAnuncio === props.route.params?.produto.id_produto ) {
  //     setTipoAnuncio(navigation.navigate(TELAS.TELA_EDITAR_CADASTRO_PRODUTO, {
  //       produto: props.item,
  //     }))
  //   } else {

  //   }

  // }

  const navigation = useNavigation();

  return (
    <View>
      {/* {tipoAnuncio && <Pressable
        onPress={itemTipoAnuncio}
      >
        <View style={styles.container}>
          <Text style={styles.titulo}>{props.item.titulo}</Text>
          <Text>{props.item.bairro}</Text>
        </View>
      </Pressable>} */}

      {props.item.id_produto && (
        <Pressable
          onPress={() =>
            navigation.navigate(TELAS.TELA_EDITAR_CADASTRO_PRODUTO, {
              produto: props.item,
            })
          }
        >
          <View style={styles.container}>
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
