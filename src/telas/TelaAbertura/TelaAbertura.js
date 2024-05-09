import { Image, View } from "react-native";
import styles from "./TelaAberturaStyles";
F
const TelaAbertura = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/logoBriks.png")} style={styles.logo} />
    </View>
  );
};


export default TelaAbertura;
