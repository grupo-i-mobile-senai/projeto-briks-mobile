import { Image, View } from "react-native";
import styles from "./LogoBriksStyles";

export const LogoBriks = () => {
  return (
    <View style={styles.containerLogo}>
      <Image
        source={require("../../../../assets/logoBriks.png")}
        style={styles.logo}
      />
    </View>
  );
};

export const IconBriks = () => {
  return (
    <View style={styles.containerLogo}>
      <Image
        source={require("../../../../assets/favicon-briks.png")}
        style={styles.icon}
      />
    </View>
  );
};

