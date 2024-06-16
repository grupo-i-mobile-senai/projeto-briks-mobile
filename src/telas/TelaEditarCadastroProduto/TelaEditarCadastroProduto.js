import React from "react";
import { ScrollView, View } from "react-native";
import {
  CampoTextoCustomizadoSecundario,
  CampoTextoCustomizadoDescricao,
} from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";

import styles from "./TelaEditarCadastroProdutoStyles";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import CampoImagem from "../../comum/componentes/CampoImagem/CampoImagem";
import apiCep from "../../comum/servicos/apiCep";
import api from "../../comum/servicos/api";
import TELAS from "../../comum/constantes/telas";
import { useToast } from "native-base";
import ModalConfirm from "../../comum/componentes/Modal/ModalConfirm/ModalConfirm";

const TelaEditarCadastroProduto = (props) => {
  const toast = useToast();

  const [campoFoto, setCampoFoto] = React.useState(
    props.route.params?.produto.foto_produto || ""
  );
  const [campoTitulo, setCampoTitulo] = React.useState(
    props.route.params?.produto.titulo || ""
  );
  const [campoDescricao, setCampoDescricao] = React.useState(
    props.route.params?.produto.descricao || ""
  );
  const [campoCep, setCampoCep] = React.useState(
    props.route.params?.produto.cep || ""
  );
  const [campoRua, setCampoRua] = React.useState(
    props.route.params?.produto.rua || ""
  );
  const [campoBairro, setCampoBairro] = React.useState(
    props.route.params?.produto.bairro || ""
  );
  const [campoCidade, setCampoCidade] = React.useState(
    props.route.params?.produto.cidade || ""
  );
  const [abrirModal, setAbrirModal] = React.useState(false);

  const localizarCep = async () => {
    try {
      const response = await apiCep.get(`/${campoCep}`);
      setCampoRua(response.data.street);
      setCampoBairro(response.data.neighborhood);
      setCampoCidade(response.data.city);
    } catch (error) {
      console.log("Erro: " + error);
      if (error) {
        toast.show({
          description: "CEP inválido ou não encontrado.",
          placement: "top",
        });
      }
    }

    if (!campoCep) {
      // alert('Erro ao localizar CEP')
      toast.show({
        description: "Campo CEP não pode ficar vazio.",
        placement: "top",
      });
    }
  };

  const salvarProdutoEditado = async () => {
    try {
      const produto = {
        id_produto: props.route.params?.produto.id_produto,
        foto_produto: campoFoto,
        titulo: campoTitulo,
        descricao: campoDescricao,
        cep: campoCep,
        rua: campoRua,
        bairro: campoBairro,
        cidade: campoCidade,
      };

      if (props.route.params?.produto.id_produto) {
        await api.put("/produtos", produto);
      } else {
        await api.post("/produtos", produto);
      }

      toast.show({
        description: "Dados alterados com sucesso!",
        placement: "top",
      });

      props.navigation.navigate(TELAS.TELA_MEUS_ANUNCIOS, {
        refresh: +new Date(),
      });
    } catch (error) {
      // alert(error.response.data);
      toast.show({
        description: error.response.data,
        placement: "top",
      });
    }
  };

  const excluirProduto = () => {
    setAbrirModal(true); // Abrir o modal de confirmação ao clicar em Excluir
  };

  const confirmarExclusao = async () => {
    try {
      await api.delete(`/produtos/${props.route.params.produto.id_produto}`);
      // alert("Anúncio excluído com sucesso!");
      toast.show({
        description: "Anúncio excluído com sucesso!",
        placement: "top",
      });
      setAbrirModal(false); // Fechar o modal após a exclusão
      props.navigation.navigate(TELAS.TELA_MEUS_ANUNCIOS, {
        refresh: +new Date(),
      });
    } catch (error) {
      // alert(error.response.data);
      toast.show({
        description: error.response.data,
        placement: "top",
      });
    }
  };

  const fecharModal = () => {
    setAbrirModal(false); // Fechar o modal se o usuário cancelar a exclusão
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerImagem}>
          <CampoImagem imagem={campoFoto} setImagem={setCampoFoto} />
        </View>

        <CampoTextoCustomizadoSecundario
          label="Título"
          value={campoTitulo}
          onChangeText={setCampoTitulo}
        />

        <CampoTextoCustomizadoDescricao
          label="Descrição"
          multiline={true}
          rows={4}
          maxLength={100}
          value={campoDescricao}
          onChangeText={setCampoDescricao}
        />

        <View>
          <CampoTextoCustomizadoSecundario
            label="Localização"
            placeholder="CEP"
            inputMode="numeric"
            maxLength={8}
            value={campoCep}
            onChangeText={setCampoCep}
          />

          <BotaoCustomizado onPress={localizarCep} cor="secundaria">
            Buscar CEP
          </BotaoCustomizado>
        </View>

        <View>
          <CampoTextoCustomizadoSecundario
            placeholder="Rua"
            value={campoRua}
            onChangeText={setCampoRua}
            readOnly
          />
          <CampoTextoCustomizadoSecundario
            placeholder="Bairro"
            value={campoBairro}
            onChangeText={setCampoBairro}
            readOnly
          />
          <CampoTextoCustomizadoSecundario
            placeholder="Cidade"
            value={campoCidade}
            onChangeText={setCampoCidade}
            readOnly
          />
        </View>

        <BotaoCustomizado cor="primaria" onPress={salvarProdutoEditado}>
          Salvar
        </BotaoCustomizado>

        <BotaoCustomizado cor="secundaria" onPress={excluirProduto}>
          Excluir
        </BotaoCustomizado>

        <ModalConfirm
          isOpen={abrirModal}
          onClose={fecharModal}
          onConfirm={confirmarExclusao}
        />
      </View>
    </ScrollView>
  );
};

export default TelaEditarCadastroProduto;
