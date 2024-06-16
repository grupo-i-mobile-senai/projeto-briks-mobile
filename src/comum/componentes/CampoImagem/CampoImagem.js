import React from "react";
import * as ImagePicker from "expo-image-picker";
import { Image, Pressable, View } from "react-native";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import styles from "./CampoImagemStyles";

import MateriallIcons from "@expo/vector-icons/MaterialIcons"

const CampoImagem = ({imagem, setImagem}) => {
  // const [imagem, setImagem] = React.useState();

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
    
    <View style={styles.containerImagem}>
      <Pressable onPress={pickImage}>

      {!imagem && <MateriallIcons name="add-a-photo" size={56}  />}
      {imagem && (
        <Image source={{ uri: imagem }} style={styles.tamanhoImagem}/>
        )}
        </Pressable>
    </View>
  );
};

export default CampoImagem;
