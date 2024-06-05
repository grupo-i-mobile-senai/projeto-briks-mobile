import { View } from "react-native";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import TELAS from "../../comum/constantes/telas";
import styles from "./TelaMeusAnunciosStyles";
import React, { useEffect } from "react";
import { CampoTextoCustomizadoPrimario } from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";

const TelaMeusAnuncios = (props) => {
  return (
    <View style={styles.container}>
      {/* COLCOAR CARD COM MEUS ANUNCIOS PUBLICADOS */}

      <BotaoCustomizado
        cor="secundaria"
        onPress={() => props.navigation.navigate(TELAS.TELA_PRINCIPAL)}
      >
        Tela Principal
      </BotaoCustomizado>
    </View>
  );
};

export default TelaMeusAnuncios;
