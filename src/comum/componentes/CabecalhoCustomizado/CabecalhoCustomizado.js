import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Pressable, Text, View } from 'react-native';
import CORES from '../../constantes/cores';
import TELAS from '../../constantes/telas';
import styles from './CabecalhoCustomizadoStyles';
import { useEffect, useState } from 'react';
import { CHAVES_STORAGE } from '../../constantes/chaves-storage';
import { pegarItemStorage } from '../../servicos/servicoStorage';


const CabecalhoCustomizado = (props) => {
    const [usuarioLogado, setUsuarioLogado] = useState();
  const [image, setImage] = useState(null);

  useEffect(() => {
    const verificarSeUsuarioEstaLogado = async () => {
      const usuarioQueEstaNoStorage = await pegarItemStorage(CHAVES_STORAGE.USUARIO_LOGADO);
      setUsuarioLogado(usuarioQueEstaNoStorage);
    };

    verificarSeUsuarioEstaLogado();
  }, []);




  return (
    <View style={styles.container}>
      {props.navigation.canGoBack() && (
        <MaterialIcons name='arrow-back' size={24} color={CORES.TEXTO_CLARO} onPress={props.navigation.goBack} />
      )}


      <Text style={styles.titulo}>{props.options.title}</Text>

      {usuarioLogado && (

      <Pressable onPress={() => 
      props.navigation.navigate(TELAS.TELA_PERFIL_USUARIO)}>
        <View style={styles.avatar}>
            {!image && <Text>{usuarioLogado.nome[0]}</Text>}
            {image && <Image source={{uri: image}} style={styles.imagem}/>}
        
        </View>
      </Pressable>

      )}

    </View>
  );
};

export default CabecalhoCustomizado;