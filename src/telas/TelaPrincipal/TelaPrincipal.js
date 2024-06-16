import { View, Text, Pressable } from "react-native";
import TELAS from "../../comum/constantes/telas";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import styles from "./TelaPrincipalStyles";
import { useEffect, useState } from "react";
import api from "../../comum/servicos/api";

import { LinearGradient } from "expo-linear-gradient";

import MateriallCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Materialicons from '@expo/vector-icons/MaterialIcons'
import CORES from "../../comum/constantes/cores";
import GradienteCustomizado from "../../comum/componentes/GradienteCustomizado/GradienteCustomizado";

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
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              locations={[0, 1]}
              colors={["#FFA500", "#FF6347"]}
              style={{
                flex: 1,
                borderRadius: 8,
                padding: 8,
                justifyContent: "center",
              }}
            >
              <Text style={styles.texto}>Total Produtos</Text>
              <Text style={styles.textoGrande}>{dashboard.totalProdutos}</Text>
            </LinearGradient>
          </View>

          <View style={styles.containerDashboard}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              locations={[0, 1]}
              colors={["#FFA500", "#FF6347"]}
              style={{
                flex: 1,
                borderRadius: 8,
                padding: 8,
                justifyContent: "center",
              }}
            >
              <Text style={styles.texto}>Total Serviços</Text>
              <Text style={styles.textoGrande}>{dashboard.totalServicos}</Text>
            </LinearGradient>
          </View>
        </View>
      )}
      <View style={styles.containerTodosBotoes}>
        <View style={styles.containerBotao}>
          <BotaoCustomizado
          cor='telaPrincipal'
            icone={
              <Materialicons
                name="search"
                size={48}
                color={CORES.BRANCA}
              />
            }
            // cor="padrao"
            onPress={() => props.navigation.navigate(TELAS.TELA_LISTA_ANUNCIO)}
          >
            PESQUISAR
          </BotaoCustomizado>

          <GradienteCustomizado cores={["#FFA500", "#FF6347"]}>
            <BotaoCustomizado
              cor="telaPrincipal"
              icone={
                <MateriallCommunityIcons
                  name="archive"
                  size={48}
                  color={CORES.BRANCA}
                />
              }
              onPress={() =>
                props.navigation.navigate(TELAS.TELA_MEUS_ANUNCIOS)
              }
            >
              MEUS ANÚNCIOS
            </BotaoCustomizado>
          </GradienteCustomizado>
        </View>

        <View style={styles.containerBotao}>
          <GradienteCustomizado cores={["#FFA500", "#FF6347"]}>
            <BotaoCustomizado
              cor="telaPrincipal"
              icone={
                <MateriallCommunityIcons
                  name="archive-plus"
                  size={48}
                  color={CORES.BRANCA}
                />
              }
              onPress={() =>
                props.navigation.navigate(TELAS.TELA_CADASTRO_PRODUTO)
              }
            >
              ANUNCIAR PRODUTO
            </BotaoCustomizado>
          </GradienteCustomizado>

          <BotaoCustomizado
            icone={<MateriallCommunityIcons name="briefcase-plus" size={48} color={CORES.BRANCA}/>}
            cor="telaPrincipal"
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
