import { Text, View } from "react-native";
import styles from "./ListaVaziaStyles";

const ListaVazia = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.textoVazio}>Nenhum anúncio para listar.</Text>
        </View>
    );
};

export default ListaVazia;