import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TELAS from "./src/comum/constantes/telas";
import TelaAbertura from "./src/telas/TelaAbertura/TelaAbertura";
import TelaLogin from "./src/telas/TelaLogin/TelaLogin";
import TelaPrincipal from "./src/telas/TelaPrincipal/TelaPrincipal";
import TelaCadastroUsuario from "./src/telas/TelaCadastroUsuario/TelaCadastroUsuario";

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={TELAS.TELA_LOGIN}
          screenOptions={{ cardStyle: { flex: 1 } }}
        >
          <Stack.Group>
            <Stack.Screen
              name={TELAS.TELA_ABERTURA}
              component={TelaAbertura}
              options={{ title: "TELA ABERTURA", headerShown: false }}
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

          {/* TELA PRINCIPAL */}
          <Stack.Screen
            name={TELAS.TELA_PRINCIPAL}
            component={TelaPrincipal}
            options={{ title: "PRINCIPAL", headerLeft: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </View>
  );
}
