import { View } from "react-native";
import CampoImagem from "../../comum/componentes/CampoImagem/CampoImagem";
import { CampoTextoCustomizadoSecundario } from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import styles from "./TelaPerfilUsuarioStyles";

const TelaPerfilUsuario = () => {
    return(
        <View style={styles.container}>

            <View style={styles.containerImagem}>

            <CampoImagem/>

            </View>

            <CampoTextoCustomizadoSecundario
            // style={styles.campoTextoLogin}
            label="Nome"
            />

            <CampoTextoCustomizadoSecundario
            // style={styles.campoTextoLogin}
            label="CPF"
            inputMode="numeric"
            maxLength={11}
            />

            <CampoTextoCustomizadoSecundario
            // style={styles.campoTextoLogin}
            label="Email"
            inputMode="email"
            />

            <CampoTextoCustomizadoSecundario
            // style={styles.campoTextoLogin}
            label="Senha"
            secureTextEntry
            />

            <View>

            <BotaoCustomizado cor="secundaria">
                Editar Dados
            </BotaoCustomizado>

            </View>

            <View>

            <BotaoCustomizado cor="primaria">
                Excluir Conta
            </BotaoCustomizado>

            </View>


        </View>
    );
};

export default TelaPerfilUsuario;