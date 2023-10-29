import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  CssBaseline,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

const Perfil = () => {
  const { id } = useParams();

  const {
    data: buscaAutonomo,
    isFetching: isFetchingBuscaAutonomo,
    IsError: IsErrorBuscaAutonomo,
  } = useQuery("buscaAutonomo", async () => {
    const response = axios.get(
      `https://ajuda-ai-backend.onrender.com/api/autonomo/${id}`,
      {
        headers: {
          Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiTWFyY3VzIFRlc3RlIiwic2VuaGEiOiIxMjMiLCJpYXQiOjE2OTcwNjg2MTh9.-Q0bpWF7W7AHt9YjJjtcirwhIACTUj_iJQ6bgMsBnTk`,
        },
      }
    );

    return response;
  });

  const { data: listagemComentarios } = useQuery(
    "listagemComentarios",
    async () => {
      const response = axios.get(
        "https://ajuda-ai-backend.onrender.com/api/comentarios",
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiTWFyY3VzIFRlc3RlIiwic2VuaGEiOiIxMjMiLCJpYXQiOjE2OTcwNjg2MTh9.-Q0bpWF7W7AHt9YjJjtcirwhIACTUj_iJQ6bgMsBnTk`,
          },
        }
      );

      return response;
    }
  );

  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <Box mt={4}>
        {isFetchingBuscaAutonomo ? (
          <Card>
            <Box padding={2}>
              <LinearProgress />
            </Box>
          </Card>
        ) : IsErrorBuscaAutonomo ? (
          <Card>
            <Box padding={2} display="flex" justifyContent="center">
              <Typography fontWeight="bolder">
                Ocorreu um erro ao buscar informações.
              </Typography>
            </Box>
          </Card>
        ) : (
          <Card>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 5,
                padding: 4,
              }}
            >
              <Grid container>
                <Grid item xs={2}>
                  <Avatar sx={{ m: 1, bgcolor: "default" }} sizes="large">
                    <AccountCircleIcon />
                  </Avatar>
                </Grid>
                <Grid item xs={10}>
                  <Box display="flex" flexDirection="column" gap={1} p={2}>
                    <Typography>Nome: {buscaAutonomo?.data.nome}</Typography>
                    <Typography>
                      Profissão: {buscaAutonomo?.data.profissao}
                    </Typography>
                    <Typography>
                      Documento: {buscaAutonomo?.data.cpf}
                    </Typography>
                    <Typography>
                      Data de nascimento: {buscaAutonomo?.data.dataDeNascimento}
                    </Typography>
                    <Typography>
                      Descrição: {buscaAutonomo?.data.descricao}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Box
                component="form"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  gap: 2,
                }}
              >
                <Box width="90%">
                  <TextField
                    required
                    fullWidth
                    id="comentario"
                    label="Comentário"
                    name="comentario"
                    autoComplete="comentario"
                    multiline
                  />
                </Box>
                <Button variant="contained" type="submit">
                  Enviar
                </Button>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                {listagemComentarios?.data?.map((item, index) => (
                  <Card key={index}>
                    <Box padding={2}>
                      <Typography>{item.descricao}</Typography>
                    </Box>
                  </Card>
                ))}
                <Card></Card>
              </Box>
            </Box>
          </Card>
        )}
      </Box>
    </Container>
  );
};

export default Perfil;
