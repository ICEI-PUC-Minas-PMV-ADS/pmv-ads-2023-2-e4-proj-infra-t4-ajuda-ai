import {
  Box,
  Card,
  Container,
  CssBaseline,
  LinearProgress,
  Typography,
} from "@mui/material";
import CardListagem from "../componentes/card-listagem";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

const Inicio = () => {
  const navigate = useNavigate();

  const {
    data: listagemAutonomos,
    isFetching: isFetchingListagemAutonomos,
    isError: isErrorListagemAutonomos,
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

  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      {isFetchingListagemAutonomos ? (
        <Box m={2}>
          <Card>
            <Box padding={2}>
              <LinearProgress />
            </Box>
          </Card>
        </Box>
      ) : isErrorListagemAutonomos ? (
        <Card>
          <Box padding={2} display="flex" justifyContent="center">
            <Typography fontWeight="bolder">
              Ocorreu um erro ao buscar informações.
            </Typography>
          </Box>
        </Card>
      ) : (
        listagemAutonomos?.data?.map((item, index) => (
          <CardListagem
            dados={item}
            key={index}
            onClick={() => navigate(`/${item._id}`)}
          />
        ))
      )}
    </Container>
  );
};

export default Inicio;
