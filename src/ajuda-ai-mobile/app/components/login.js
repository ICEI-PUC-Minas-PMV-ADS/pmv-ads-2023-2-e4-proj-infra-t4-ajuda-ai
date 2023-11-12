import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, TextInput, Icon } from "react-native-paper";
import { theme } from "../theme";

const Login = ({ setPage, setIsLogged }) => {
  const [form, setForm] = useState({});

  const isEmailValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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

      <View style={styles.containerSubTitle}>
        <Button
          mode="contained"
          theme={theme}
          onPress={() => {
            if (!form.email || !form.password) {
              alert("Preencha todos os campos");
            } else if (!isEmailValid(form.email)) {
              alert("Email inválido");
            } else {
              setIsLogged(true);
            }
          }}
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
