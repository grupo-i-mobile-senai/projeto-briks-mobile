import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import CORES from "../../comum/constantes/cores";
import TELAS from "../../comum/constantes/telas";

const styles = StyleSheet.create({
  container: {
    height: 104,
    backgroundColor: CORES.BRANCA,
    borderRadius: 8,
    padding: 16,
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  titulo: {
    fontSize: 20,
  },
});

const ItemAnuncio = (props) => {
  const navigation = useNavigation();

  return (
    <View>
      {/* PRODUTO */}
      {props.item.id_produto && (
        <Pressable
          onPress={() =>
            navigation.navigate(TELAS.TELA_ANUNCIO_DETALHADO_PRODUTO, {
              produto: props.item,
            })
          }
        >
          <View style={styles.container}>
          <Image source={{ uri: props.item.foto_produto }} style={{width: 56, height: 56}}/>
           <View>
            <Text style={styles.titulo}>{props.item.titulo}</Text>
            <Text>{props.item.bairro}</Text>
            <Text>{props.item.categoria}</Text>
            
           </View>
          </View>
        </Pressable>
      )}

      {/* SERVICO */}
      {props.item.id_servico && (
        <Pressable
          onPress={() =>
            navigation.navigate(TELAS.TELA_ANUNCIO_DETALHADO_SERVICO, {
              servico: props.item,
            })
          }
        >
          <View style={styles.container}>
          <Image source={{ uri: props.item.foto_servico }} style={{width: 56, height: 56}}/>
          <View>
            <Text style={styles.titulo}>{props.item.titulo}</Text>
            <Text>{props.item.regiao}</Text>
            <Text>{props.item.categoria}</Text>
           </View>
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default ItemAnuncio;
