import { StyleSheet } from "react-native";
import CORES from "./cores";

const stylesModal = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 56,

    // borderWidth:1
  },
  modalView: {
    // borderWidth: 1,
    borderColor: "red",

    flex: 1,
    width: 324,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 8,
    // padding: 128,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 8,
    padding: 8,
    margin: 8,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: CORES.VERMELHO,
  },
  buttonOpen: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  cabecalhoChat: {
    // flex:0.5,
    backgroundColor: CORES.LARANJA,
    opacity: 0.5,
    // borderWidth: 1,
    borderColor: "blue",
    width: "95%",
    alignItems: "flex-end",
    marginTop: 8,
    borderRadius: 8,
  },
  corpoChat: {
    flex: 1,
    // borderWidth: 1,
    borderColor: "purple",
    width: "100%",
    padding: 8,
  },
  rodapeChat: {
    // flex:1,

    justifyContent: "space-between",
    flexDirection: "row",
    // borderWidth: 1,
    borderColor: "gray",
    width: "95%",
    // marginTop: 10,
    marginBottom: 8,
    // marginLeft: 8,
    // marginRight: 32,
    // margin:8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#e0e0e0",
  },
  rodapeChatIcon: {
    // flex:1,
    // borderWidth: 1,
    // borderColor: "green",
    width: "100%",
    marginRight: 8,
  },
  rodapeChatCampo: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: "green",
  },
  rodapeChatBotao: {
    // flex:1,
    // borderWidth: 1,
    // borderColor: "green",
    justifyContent: "flex-end",
  },
});

export default stylesModal;
