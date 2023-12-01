import { useState } from "react";
import { View, StyleSheet, Text, Alert,ToastAndroid } from "react-native";
import { Button, TextInput, Icon } from "react-native-paper";
import { theme } from "../theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Login = ({ setPage, setIsLogged }) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});
  // const [isSelected, setSelection] = useState(false);

  const isEmailValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async () => {
    setLoading(true);

    if (!form.email || !form.password) {
      setLoading(false);  
      ToastAndroid.showWithGravityAndOffset(
        'Preencha todos os campos',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,25,50,);        
    } else if (!isEmailValid(form.email)) {
      setLoading(false);
      ToastAndroid.showWithGravityAndOffset(
        'Email inválido',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,25,50,);
    } else {
      try {
        const response = await axios.post(
          "https://ajuda-ai-backend.onrender.com/api/login-perfil",
          {
            // perfil: isSelected ? 'autonomo' : 'usuario',
            perfil: 'usuario',
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
        ToastAndroid.showWithGravityAndOffset(
          'Erro de login',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,25,50,);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Icon size={35} source="lock" color={theme.colors.secondary} />
        <Text style={styles.textTitle}>Login</Text>
      </View>
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
      {/* <div style={ { display: "flex", gap: "10px" } }>     
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />  
        <Text style={styles.label}>Você é Autonômo?</Text> 
        {isSelected ? '👍' : '👎'}
      </div> */}

      <View style={styles.containerSubTitle}>
        <Button
          mode="contained"
          theme={theme}
          loading={loading}
          onPress={() => handleSubmit()}
        >
          Entrar
        </Button>
        <Text
          style={styles.textSubtitleLink}
          onPress={() => setPage("registro")}
        >
          Cadastre-se aqui
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: "flex-start",
    gap: 25,
    padding: 20,
  },
  textTitle: {
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
