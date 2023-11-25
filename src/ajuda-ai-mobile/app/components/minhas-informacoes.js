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
  const [form, setForm] = useState();

  const checkLogin = async () => {
    const loginInfo = await AsyncStorage.getItem("@login");
    if (loginInfo) {
      setLogin(JSON.parse(loginInfo));
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    const formData = {
      nome: form.nome || login.response.nome,
      dataDeNascimento:
        form.dataDeNascimento || login.response.dataDeNascimento,
      telefone: form.telefone || login.response.telefone,
      email: form.email || login.response.email,
      senha: form.senha || login.response.senha,
      cpf: form.documento || login.response.cpf,
      foto: "https://img.freepik.com/fotos-gratis/jovem-afro-americano-bonito-com-camiseta-caqui_176420-32042.jpg",
    };

    try {
      await axios.put(
        `https://ajuda-ai-backend.onrender.com/api/usuario/${login.response._id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setLoading(false);
    } catch (error) {
      console.error("Erro:", error);
      setLoading(false);
    }
  };

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
      {login.response && (
        <View style={styles.container}>
          <View style={styles.containerForm}>
            <TextInput
              mode="outlined"
              theme={theme}
              label="Nome"
              defaultValue={login.response.nome}
              onChangeText={(nome) => {
                setForm((state) => ({ ...state, nome }));
              }}
            />
            <TextInput
              mode="outlined"
              theme={theme}
              label="Documento"
              defaultValue={login.response.cpf}
              onChangeText={(documento) => {
                setForm((state) => ({ ...state, documento }));
              }}
            />
            <TextInput
              mode="outlined"
              theme={theme}
              label="Telefone"
              defaultValue={login.response.telefone}
              onChangeText={(telefone) => {
                setForm((state) => ({ ...state, telefone }));
              }}
            />
            <TextInput
              mode="outlined"
              theme={theme}
              label="Data de nascimento"
              defaultValue={login.response.dataDeNascimento
                ?.slice(0, 10)
                .split("-")
                .reverse()
                .join("/")}
              onChangeText={(dataDeNascimento) => {
                setForm((state) => ({ ...state, dataDeNascimento }));
              }}
            />
            <TextInput
              mode="outlined"
              theme={theme}
              label="Email"
              keyboardType="email-address"
              defaultValue={login.response.email}
              onChangeText={(email) => {
                setForm((state) => ({ ...state, email }));
              }}
            />
            <TextInput
              mode="outlined"
              theme={theme}
              secureTextEntry={true}
              label="Senha"
              type="password"
              defaultValue={login.response.senha}
              onChangeText={(senha) => {
                setForm((state) => ({ ...state, senha }));
              }}
            />
            <Button
              mode="contained"
              theme={theme}
              onPress={handleSubmit}
              loading={loading}
            >
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
      )}
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
