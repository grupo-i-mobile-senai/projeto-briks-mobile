import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import TelaAbertura from "./src/telas/TelaAbertura/TelaAbertura";
import TelaLogin from "./src/telas/TelaLogin/TelaLogin";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TELAS from "./src/comum/constantes/telas";


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
        <Stack.Navigator initialRouteName={TELAS.TELA_LOGIN}>
          <Stack.Screen name={TELAS.TELA_ABERTURA} component={TelaAbertura} options={{title: 'TELA ABERTURA', headerShown: false}}/>
          <Stack.Screen name={TELAS.TELA_LOGIN} component={TelaLogin} options={{title: 'LOGIN', headerShown: false}}/>
          <Stack.Screen name={TELAS.TELA_PRINCIPAL} component={TelaLogin} options={{title: 'PRINCIPAL'}}/>
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </View>
  );
}
