import { View } from "react-native";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import TELAS from "../../comum/constantes/telas";

const TelaMeusAnuncios = (props) => {
    return(
        <View>

            {/* COLCOAR CARD COM MEUS ANUNCIOS PUBLICADOS */}

            <BotaoCustomizado cor='secundaria' onPress={()=> props.navigation.navigate(TELAS.TELA_PRINCIPAL)}>
                Tela Principal
            </BotaoCustomizado>
        </View>
    );
};

export default TelaMeusAnuncios;