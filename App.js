import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import TelaAbertura from "./src/telas/TelaAbertura/TelaAbertura";
import TelaLogin from "./src/telas/TelaLogin/TelaLogin";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


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
        <Stack.Navigator >
          <Stack.Screen name="TelaAbertura" component={TelaAbertura} options={{title: 'TELA ABERTURA', headerShown: false}}/>
          <Stack.Screen name="TelaLogin" component={TelaLogin} options={{title: 'LOGIN'}}/>
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </View>
  );
}
