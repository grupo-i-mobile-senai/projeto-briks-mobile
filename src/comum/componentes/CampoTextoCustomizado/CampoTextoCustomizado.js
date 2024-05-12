import { Text, TextInput, View } from "react-native";
import styles from "./CampoTextoCustomizadoStyles";

export const CampoTextoCustomizadoPrimario = (props) => {
  return (
    <View>
      <Text style={styles.labelTexto}>{props.label}</Text>
      <TextInput style={styles.campoTextoPrimario} {...props} />
    </View>
  );
};

export const CampoTextoCustomizadoSecundario = (props) => {
  return (
    <View>
      <Text style={styles.labelTexto}>{props.label}</Text>
      <TextInput style={styles.campoTextoSecundario} {...props} />
    </View>
  );
};

