import axios from "axios";
import { Text, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { ProgressBar, Icon, TextInput, Button } from "react-native-paper";
import { useQuery } from "react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { theme } from "../theme";
import { ScrollView } from "react-native-gesture-handler";

const Perfil = ({ route }) => {
  const [login, setLogin] = useState({});
  const [comentario, setComentario] = useState("");
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

  const {
    data: listagemComentarios,
    isFetching: isFetchingComentarios,
    refetch: refetchListagemComentarios,
  } = useQuery("listagemComentarios", async () => {
    const response = axios.get(
      "https://ajuda-ai-backend.onrender.com/api/comentarios",
      {
        headers: {
          Authorization: login.token,
        },
      }
    );

    return response;
  });

  const handleSubmit = async () => {
    setLoading(true);

    try {
      await axios.post(
        "https://ajuda-ai-backend.onrender.com/api/comentario",
        {
          autonomoId: route.params.id,
          descricao: comentario,
          usuarioId: login.response._id,
        },
        {
          headers: {
            Authorization: login.token,
          },
        }
      );
      setLoading(false);
      refetchListagemComentarios();
      setComentario("");
    } catch (error) {
      setLoading(false);
      console.error("Erro:", error);
    }
  };

  return (
    <ScrollView>
      {isFetchingBuscaAutonomo ? (
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
          <TextInput
            mode="outlined"
            theme={theme}
            label="Descrição"
            onChangeText={(comentario) => setComentario(comentario)}
            multiline
            value={comentario}
          />
          <Button
            mode="contained"
            theme={theme}
            style={{ marginBottom: 15 }}
            onPress={handleSubmit}
            loading={loading}
          >
            Comentar
          </Button>
          {isFetchingComentarios ? (
            <ProgressBar
              style={{ margin: 10 }}
              indeterminate
              color={theme.colors.primary}
            />
          ) : (
            listagemComentarios?.data
              ?.filter((item) => item.autonomoId === route.params.id)
              .reverse()
              .map((item) => (
                <View
                  key={item._id}
                  style={{
                    padding: 10,
                    margin: 4,

                    backgroundColor: theme.colors.background,
                    borderRadius: 2,
                  }}
                >
                  <Text>{item.descricao}</Text>
                </View>
              ))
          )}
        </View>
      )}
    </ScrollView>
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
