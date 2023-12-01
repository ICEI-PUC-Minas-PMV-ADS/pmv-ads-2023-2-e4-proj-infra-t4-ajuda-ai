import { useState } from "react";
import { View, StyleSheet, Text, ToastAndroid } from "react-native";
import { Button, TextInput, Icon } from "react-native-paper";
import { theme } from "../theme";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Registro = ({ setPage, setIsLogged }) => {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);

  const isEmailValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const formData = {
    nome: form.name,
    dataDeNascimento: "1996-03-07",
    telefone: "11999999999",
    email: form.email,
    senha: form.password,
    cpf: "235.698.960-99",
    foto: "https://img.freepik.com/fotos-gratis/jovem-afro-americano-bonito-com-camiseta-caqui_176420-32042.jpg",
  };

  const handleSubmit = async () => {
    setLoading(true);

    if (!form.name || !form.email || !form.password) {
      setLoading(false);  
      ToastAndroid.showWithGravityAndOffset(
        'Preencha todos os campos',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,25,50,);
    } else if (!isEmailValid(form.email)) {
      ToastAndroid.showWithGravityAndOffset(
        'Preencha um email válido',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,25,50,);
    } else {
      try {
        await axios.post(
          "https://ajuda-ai-backend.onrender.com/api/usuario",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const response = await axios.post(
          "https://ajuda-ai-backend.onrender.com/api/login-perfil",
          {
            perfil: "usuario",
            email: form.email,
            senha: form.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        await AsyncStorage.setItem("@login", JSON.stringify(response.data));

        setLoading(false);
        setIsLogged(true);
      } catch (error) {
        setLoading(false);
        console.error("Erro:", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Icon size={35} source="lock" color={theme.colors.secondary} />
        <Text style={styles.text}>Cadastro</Text>
      </View>
      <TextInput
        mode="outlined"
        theme={theme}
        label="Nome"
        onChangeText={(name) => {
          setForm((state) => ({ ...state, name }));
        }}
      />
      <TextInput
        mode="outlined"
        theme={theme}
        label="Email"
        onChangeText={(email) => {
          setForm((state) => ({ ...state, email: email.trim() }));
        }}
      />
      <TextInput
        mode="outlined"
        theme={theme}
        secureTextEntry={true}
        label="Senha"
        type="password"
        onChangeText={(password) => {
          setForm((state) => ({ ...state, password }));
        }}
      />
      <View style={styles.containerSubTitle}>
        <Button
          theme={theme}
          mode="contained"
          loading={loading}
          onPress={() => handleSubmit()}
        >
          Cadastrar
        </Button>
        <Text style={styles.textSubtitleLink} onPress={() => setPage("login")}>
          Já tem uma conta? Entre aqui
        </Text>
      </View>
    </View>
  );
};

export default Registro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: "flex-start",
    gap: 25,
    padding: 20,
  },
  text: {
    fontSize: 25,
    textAlign: "center",
  },
  containerSubTitle: {
    gap: 5,
    justifyContent: "flex-end",
  },
  textSubtitleLink: {
    fontSize: 15,
    color: theme.colors.primary,
    alignSelf: "flex-end",
  },
});
