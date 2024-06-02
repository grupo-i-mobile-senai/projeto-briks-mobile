import AsyncStorage from "@react-native-async-storage/async-storage";

export async function pegarItemStorage(chave) {
  try {
    const valor = await AsyncStorage.getItem(chave);
    return JSON.parse(valor);
  } catch {
    return null;
  }
}

export async function atualizarItemStorage(chave, valor) {
  try {
    return await AsyncStorage.setItem(chave, JSON.stringify(valor));
  } catch {
    return null;
  }
}

export async function limparStorage(chave) {
  try {
    await AsyncStorage.removeItem(chave);
  } catch {
    return null;
  }
}
