import axios from "axios";
import { useQuery } from "react-query";
import CardListagem from "./card-listagem";
import { FlatList } from "react-native-gesture-handler";
import { ProgressBar } from "react-native-paper";
import { theme } from "../theme";

const Inicio = () => {
  const {
    data: listagemAutonomos,
    isFetching: isFetchingListagemAutonomos,
    // isError: isErrorListagemAutonomos,
  } = useQuery("listagemAutonomo", async () => {
    const response = axios.get(
      "https://ajuda-ai-backend.onrender.com/api/autonomos",
      {
        headers: {
          Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiTWFyY3VzIFRlc3RlIiwic2VuaGEiOiIxMjMiLCJpYXQiOjE2OTcwNjg2MTh9.-Q0bpWF7W7AHt9YjJjtcirwhIACTUj_iJQ6bgMsBnTk`,
        },
      }
    );

    return response;
  });
  console.log(listagemAutonomos?.data);
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
