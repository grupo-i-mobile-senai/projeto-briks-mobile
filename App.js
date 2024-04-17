import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require('./assets/favicon.png')} style={styles.logo}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{

    height: 100,
    width: 100

  }
});
