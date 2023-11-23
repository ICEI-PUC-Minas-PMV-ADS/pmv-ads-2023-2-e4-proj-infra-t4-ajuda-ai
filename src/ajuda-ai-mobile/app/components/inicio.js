import axios from "axios";
import { useQuery } from "react-query";
import CardListagem from "./card-listagem";
import { FlatList } from "react-native-gesture-handler";
import { ProgressBar } from "react-native-paper";
import { theme } from "../theme";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Inicio = () => {
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

  const { data: listagemAutonomos, isFetching: isFetchingListagemAutonomos } =
    useQuery(
      "listagemAutonomo",
      async () => {
        const response = axios.get(
          "https://ajuda-ai-backend.onrender.com/api/autonomos",
          {
            headers: {
              Authorization: login.token,
            },
          }
        );

        return response;
      },
      { enabled: Boolean(login.token) }
    );

  return isFetchingListagemAutonomos ? (
    <ProgressBar
      style={{ margin: 10 }}
      indeterminate
      color={theme.colors.primary}
    />
  ) : (
    <FlatList
      data={listagemAutonomos?.data}
      renderItem={({ item }) => <CardListagem key={item._id} dados={item} />}
    />
  );
};

export default Inicio;
