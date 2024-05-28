import React from "react";
import { Image, ScrollView, View } from "react-native";
import { CampoTextoCustomizadoSecundario } from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import styles from "./TelaCadastroProdutoStyles";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

// https://docs.expo.dev/versions/latest/sdk/imagepicker/
//https://docs.expo.dev/versions/v50.0.0/sdk/imagepicker/#enums
import * as ImagePicker from "expo-image-picker";

const TelaCadastroProduto = () => {
  const [imagem, setImagem] = React.useState();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);
    console.log(result.assets[0].uri);

    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.containerImagem}>
          {!imagem && <FontAwesome6 name="image" size={56} onPress={pickImage} />}
          {imagem && <Image source={{ uri: imagem }} style={styles.tamanhoImagem} />}
        </View>

        <CampoTextoCustomizadoSecundario label="Título" />
        <CampoTextoCustomizadoSecundario
          label="Descrição"
          multiline={true}
          numberOfLines={4}
        />
        <CampoTextoCustomizadoSecundario
          label="Localização"
          inputMode="numeric"
        />
        <BotaoCustomizado
          cor="primaria"
          onPress={() => alert("Seu anúncio foi cadastrado com sucesso!")}
        >
          Anunciar
        </BotaoCustomizado>
      </View>
    </ScrollView>
  );
};

export default TelaCadastroProduto;
