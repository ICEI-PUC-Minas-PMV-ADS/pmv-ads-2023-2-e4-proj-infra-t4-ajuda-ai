import axios from "axios";
import { Text, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { ProgressBar, Icon } from "react-native-paper";
import { useQuery } from "react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { theme } from "../theme";

const Perfil = ({ route }) => {
  const [login, setLogin] = useState({});

  const checkLogin = async () => {
    const loginInfo = await AsyncStorage.getItem("@login");
    if (loginInfo) {
      setLogin(JSON.parse(loginInfo));
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const {
    data: buscaAutonomo,
    isFetching: isFetchingBuscaAutonomo,
    IsError: IsErrorBuscaAutonomo,
  } = useQuery(
    "buscaAutonomo",
    async () => {
      const response = axios.get(
        `https://ajuda-ai-backend.onrender.com/api/autonomo/${route.params.id}`,
        {
          headers: {
            Authorization: login.token,
          },
        }
      );

      return response;
    },
    {
      enabled: Boolean(login.token) && Boolean(route.params.id),
    }
  );

  return isFetchingBuscaAutonomo ? (
    <ProgressBar
      style={{ margin: 10 }}
      indeterminate
      color={theme.colors.primary}
    />
  ) : (
    <View style={styles.constainer}>
      <View style={{ alignItems: "center" }}>
        <Icon source="account" size={50} color={theme.colors.primary} />
      </View>
      <View>
        <Text>Nome: {buscaAutonomo?.data.nome}</Text>
        <Text>Profissão: {buscaAutonomo?.data.profissao[0]}</Text>
        <Text>Documento: {buscaAutonomo?.data.cpf}</Text>
        <Text>
          Data de nascimento:{" "}
          {buscaAutonomo?.data.dataDeNascimento
            ?.slice(0, 10)
            .split("-")
            .reverse()
            .join("/")}
        </Text>
        <Text>Descrição: {buscaAutonomo?.data.descricao}</Text>
      </View>
    </View>
  );
};

export default Perfil;

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: "#fff",
    padding: 15,
    margin: 10,
    borderRadius: 10,
    gap: 10,
  },
});
