import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, TextInput, Icon } from "react-native-paper";
import { theme } from "../theme";

const Registro = ({ setPage, setIsLogged }) => {
  const [form, setForm] = useState({});

  const isEmailValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
          onPress={() => {
            if (!form.name || !form.email || !form.password) {
              alert("Preencha todos os campos");
            } else if (!isEmailValid(form.email)) {
              alert("Preencha um email válido");
            } else {
              setIsLogged(true);
            }
          }}
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
