import { Text, TextInput, View } from "react-native";
import styles from "./CampoTextoCustomizadoStyles";

export const CampoTextoCustomizadoPrimario = (props) => {
  return (
    <View>
      <Text style={styles.labelTextoPrimario}>{props.label}</Text>
      <TextInput style={styles.campoTextoPrimario} {...props} />
    </View>
  );
};

export const CampoTextoCustomizadoSecundario = (props) => {
  return (
    <View>
      <Text style={styles.labelTextoSecundario}>{props.label}</Text>
      <TextInput style={styles.campoTextoSecundario} {...props} />
    </View>
  );
};

export const CampoTextoCustomizadoDescricao = (props) => {
  return (
    <View>
      <Text style={styles.labelTextoSecundario}>{props.label}</Text>
      <TextInput style={styles.campoTextoDescricao} {...props} />
    </View>
  );
};
