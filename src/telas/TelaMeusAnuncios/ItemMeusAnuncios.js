import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CORES from "../../comum/constantes/cores";
import TELAS from "../../comum/constantes/telas";

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
  const navigation = useNavigation();

  return (
    // <Pressable
    //   onPress={() =>
    //     navigation.navigate(TELAS.TELA_EDITAR_CADASTRO_PRODUTO, {
    //       produto: props.item,
    //     })
    //   }
    // >
    //   <View style={styles.container}>
    //     <Text style={styles.titulo}>{props.item.titulo}</Text>
    //     <Text>{props.item.bairro}</Text>
    //   </View>
    // </Pressable>

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
  );
};

export default ItemMeusAnuncios;
