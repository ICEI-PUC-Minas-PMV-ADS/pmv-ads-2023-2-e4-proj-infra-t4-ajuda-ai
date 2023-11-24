import { View, StyleSheet } from "react-native";
import { Button, TextInput, DefaultTheme } from "react-native-paper";
import { theme } from "../theme";
import { ScrollView } from "react-native-gesture-handler";
import Modal from "./modal";
import { useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MinhasInformacoes = ({ setPage, setIsLogged }) => {
  const [excluirContaModal, setExcluirContaModal] = useState(false);
  const [login, setLogin] = useState({});
  const toggleExcluirContaModal = () => setExcluirContaModal((state) => !state);
  const [loading, setLoading] = useState(false);

  const checkLogin = async () => {
    const loginInfo = await AsyncStorage.getItem("@login");
    if (loginInfo) {
      setLogin(JSON.parse(loginInfo));
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const onConfirmExcluirConta = async () => {
    setLoading(true);
    try {
      await axios.delete(
        ` https://ajuda-ai-backend.onrender.com/api/usuario/${login.response._id}`
      );
      await AsyncStorage.removeItem("@login");
      toggleExcluirContaModal();
      setLoading(false);
      setIsLogged(false);
      setPage("home");
    } catch (error) {
      console.error("Erro:", error);
      setLoading(false);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerForm}>
          <TextInput mode="outlined" theme={theme} label="Nome" />
          <TextInput mode="outlined" theme={theme} label="Documento" />
          <TextInput mode="outlined" theme={theme} label="Telefone" />
          <TextInput mode="outlined" theme={theme} label="Data de nascimento" />
          <TextInput mode="outlined" theme={theme} label="Profissão" />
          <TextInput
            mode="outlined"
            theme={theme}
            label="Email"
            keyboardType="email-address"
          />
          <TextInput
            mode="outlined"
            theme={theme}
            label="Descrição"
            multiline
          />
          <TextInput
            mode="outlined"
            theme={theme}
            secureTextEntry={true}
            label="Senha"
            type="password"
          />
          <Button mode="contained" theme={theme}>
            Salvar
          </Button>
        </View>
        <View style={styles.deleteButtonContainer}>
          <Button
            buttonColor={DefaultTheme.colors.errorContainer}
            textColor={DefaultTheme.colors.error}
            mode="contained"
            onPress={toggleExcluirContaModal}
          >
            Excluir conta
          </Button>
        </View>
      </View>
      <Modal
        open={excluirContaModal}
        handleClose={toggleExcluirContaModal}
        title="Tem certeza que deseja excluir sua conta?"
        onConfirm={onConfirmExcluirConta}
        loading={loading}
      />
    </ScrollView>
  );
};

export default MinhasInformacoes;

const styles = StyleSheet.create({
  containerForm: {
    gap: 10,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: "flex-start",
    gap: 25,
    padding: 20,
  },
  deleteButtonContainer: {
    alignItems: "center",
    marginTop: 50,
  },
});
