import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TELAS from "./src/comum/constantes/telas";
import TelaBoasVindas from "./src/telas/TelaBoasVindas/TelaBoasVindas.js";
import TelaLogin from "./src/telas/TelaLogin/TelaLogin";
import TelaPrincipal from "./src/telas/TelaPrincipal/TelaPrincipal";
import TelaCadastroUsuario from "./src/telas/TelaCadastroUsuario/TelaCadastroUsuario";
import TelaAnuncioDetalhado from "./src/telas/TelaAnuncioDetalhado/TelaAnuncioDetalhado";
import TelaCadastroProduto from "./src/telas/TelaCadastroProduto/TelaCadastroProduto.js";
import TelaPerfilUsuario from "./src/telas/TelaPerfilUsuario/TelaPerfilUsuario.js";
import TelaCadastroServico from "./src/telas/TelaCadastroServico/TelaCadastroServico.js";
import TelaMeusAnuncios from "./src/telas/TelaMeusAnuncios/TelaMeusAnuncios.js";
import TelaListaAnuncio from "./src/telas/TelaListaAnuncio/TelaListaAnuncio.js";

import { pegarItemStorage } from "./src/comum/servicos/servicoStorage.js";
import { CHAVES_STORAGE } from "./src/comum/constantes/chaves-storage.js";
import { useEffect, useState } from "react";

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  const [usuarioLogado, setUsuarioLogado] = useState();

  useEffect(() => {
    const verificarSeUsuarioEstaLogado = async () => {
      const usuarioQueEstaNoStorage = await pegarItemStorage(
        CHAVES_STORAGE.USUARIO_LOGADO
      );
      setUsuarioLogado(usuarioQueEstaNoStorage);
    };

    verificarSeUsuarioEstaLogado();
  }, []);

  if (usuarioLogado === undefined) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={usuarioLogado ? TELAS.TELA_PRINCIPAL : TELAS.TELA_BOAS_VINDAS}
          screenOptions={{ cardStyle: { flex: 1 } }}
        >
          <Stack.Group>
            {/* TELA BOAS VINDAS */}
            <Stack.Screen
              name={TELAS.TELA_BOAS_VINDAS}
              component={TelaBoasVindas}
              options={{ title: "TELA BOAS VINDAS", headerShown: false }}
            />

            {/* TELA LOGIN */}
            <Stack.Screen
              name={TELAS.TELA_LOGIN}
              component={TelaLogin}
              options={{ title: "LOGIN", headerShown: false }}
            />

            {/* TELA CADASTRO */}
            <Stack.Screen
              name={TELAS.TELA_CADASTRO_USUARIO}
              component={TelaCadastroUsuario}
              options={{ title: "CADASTRO", headerLeft: false }}
            />
          </Stack.Group>

          <Stack.Group>
            {/* TELA PRINCIPAL */}
            <Stack.Screen
              name={TELAS.TELA_PRINCIPAL}
              component={TelaPrincipal}
              options={{ title: "PRINCIPAL", headerLeft: false }}
            />

            {/* TELA LISTA ANUNCIO */}
            <Stack.Screen
              name={TELAS.TELA_LISTA_ANUNCIO}
              component={TelaListaAnuncio}
              options={{ title: "LISTA ANUNCIO | PESQUISA" }}
            />
            
            {/* TELA ANUNCIO DETALHADO */}
            <Stack.Screen
              name={TELAS.TELA_ANUNCIO_DETALHADO}
              component={TelaAnuncioDetalhado}
              options={{ title: "ANUNCIO DETALHADO" }}
            />
            {/* TELA PERFIL USUARIO  */}
            <Stack.Screen
              name={TELAS.TELA_PERFIL_USUARIO}
              component={TelaPerfilUsuario}
              options={{ title: "PERFIL USUARIO" }}
            />

            {/* TELA CADASTRO PRODUTO  */}
            <Stack.Screen
              name={TELAS.TELA_CADASTRO_PRODUTO}
              component={TelaCadastroProduto}
              options={{ title: "CADASTRO PRODUTO" }}
            />

            {/* TELA CADASTRO SERVICO  */}
            <Stack.Screen
              name={TELAS.TELA_CADASTRO_SERVICO}
              component={TelaCadastroServico}
              options={{ title: "CADASTRO SERVICO" }}
            />

            {/* TELA MEUS ANUNCIOS */}
            <Stack.Screen
              name={TELAS.TELA_MEUS_ANUNCIOS}
              component={TelaMeusAnuncios}
              options={{ title: "MEUS ANUNCIOS" }}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </View>
  );
}
