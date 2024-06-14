import { View, Text, Pressable } from "react-native";
import TELAS from "../../comum/constantes/telas";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import styles from "./TelaPrincipalStyles";
import { useEffect, useState } from "react";
import api from "../../comum/servicos/api";

const TelaPrincipal = (props) => {
  const [dashboard, setDashboard] = useState();
  console.log(props.route);

  useEffect(() => {
    props.navigation.addListener("focus", async () => {
      const responseDash = await api.get("/dashboard");
      setDashboard(responseDash.data);
    });
  }, []);

  return (
    <View style={styles.container}>
      {dashboard && (
        <View style={{ flexDirection: "row", gap: 16 }}>
          <View style={styles.containerDashboard}>
            <Text style={styles.texto}>Total Produtos</Text>
            <Text style={styles.textoGrande}>{dashboard.totalProdutos}</Text>
          </View>
          <View style={styles.containerDashboard}>
            <Text style={styles.texto}>Total Serviços</Text>
            <Text style={styles.textoGrande}>{dashboard.totalServicos}</Text>
          </View>
        </View>
      )}
      <View style={styles.containerTodosBotoes}>
        <View style={styles.containerBotao}>
          <BotaoCustomizado
            cor="padrao"
            onPress={() => props.navigation.navigate(TELAS.TELA_LISTA_ANUNCIO)}
          >
            LISTAR ANÚNCIOS
          </BotaoCustomizado>

          <BotaoCustomizado
            cor="padrao"
            onPress={() => props.navigation.navigate(TELAS.TELA_MEUS_ANUNCIOS)}
          >
            MEUS ANÚNCIOS
          </BotaoCustomizado>
        </View>
        <View style={styles.containerBotao}>
          <BotaoCustomizado
            cor="padrao"
            onPress={() =>
              props.navigation.navigate(TELAS.TELA_CADASTRO_PRODUTO)
            }
          >
            ANUNCIAR PRODUTO
          </BotaoCustomizado>

          <BotaoCustomizado
            cor="padrao"
            onPress={() =>
              props.navigation.navigate(TELAS.TELA_CADASTRO_SERVICO)
            }
          >
            ANUNCIAR SERVIÇO
          </BotaoCustomizado>
        </View>
        <View style={styles.containerBotao}>
          {/* <BotaoCustomizado
          cor="padrao"
          onPress={() => props.navigation.navigate(TELAS.TELA_PERFIL_USUARIO)}
          >
          PERFIL
          </BotaoCustomizado>
          
          <BotaoCustomizado
          cor="padrao"
          onPress={() => props.navigation.navigate(TELAS.TELA_LOGIN)}
          >
          SAIR
        </BotaoCustomizado> */}
        </View>
      </View>
    </View>
  );
};

export default TelaPrincipal;
