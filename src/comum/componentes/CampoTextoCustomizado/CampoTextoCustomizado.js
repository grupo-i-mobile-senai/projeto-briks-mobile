import { Text, TextInput, View } from "react-native";
import styles from "./CampoTextoCustomizadoStyles";

const CampoTextoCustomizado = (props) => {
  return (
    <View>
      <Text style={styles.labelTexto}>{props.label}</Text>
      <TextInput style={styles.campoTexto} {...props} />
    </View>
  );
};

export default CampoTextoCustomizado;
