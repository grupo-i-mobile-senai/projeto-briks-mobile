import { Image, View } from "react-native";
import styles from "./LogoBriksStyles";

const LogoBriks = () => {
  return (
    <View style={styles.containerLogo}>
      <Image
        source={require("../../../../assets/logoBriks.png")}
        style={styles.logo}
      />
    </View>
  );
};

export default LogoBriks;
