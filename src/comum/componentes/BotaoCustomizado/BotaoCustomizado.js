import { Pressable, Text } from "react-native";
import styles from "./BotaoCustomizadoStyles";

const BotaoCustomizado = (props) => {
  const estilosBotao = [styles.botao];

  switch (props.cor) {
    case "primaria":
      estilosBotao.push(styles.botaoPrimario);
      break;
    case "secundaria":
      estilosBotao.push(styles.botaoSecundario);
      break;
    default:
      estilosBotao.push(styles.botaoPadrao);
      break;
  }

  return (
    <Pressable style={estilosBotao} onPress={props.onPress}>
      <Text style={styles.textoBotao}>{props.children}</Text>
    </Pressable>
  );
};

export default BotaoCustomizado;
