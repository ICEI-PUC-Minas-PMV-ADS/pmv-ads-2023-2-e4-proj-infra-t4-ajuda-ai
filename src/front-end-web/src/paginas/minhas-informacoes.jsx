import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import Modal from "../componentes/modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MinhasInformacoes = () => {
  const navigate = useNavigate();
  const [excluirContaModal, setExcluirContaModal] = useState(false);
  const toggleExcluirContaModal = () => setExcluirContaModal((state) => !state);

  const loginInfo = JSON.parse(localStorage.getItem("login"));

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const formData = {
      nome: data.get("name"),
      dataDeNascimento: data.get("birthdate"),
      telefone: data.get("telephone"),
      email: data.get("email"),
      senha: data.get("password"),
      cpf: data.get("document"),
      foto: "https://img.freepik.com/fotos-gratis/jovem-afro-americano-bonito-com-camiseta-caqui_176420-32042.jpg",
    };

    axios
      .put(
        `https://ajuda-ai-backend.onrender.com/api/usuario/${loginInfo.response._id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  };

  const onConfirmExcluirConta = async () => {
    try {
      await axios.delete(
        ` https://ajuda-ai-backend.onrender.com/api/usuario/${loginInfo.response._id}`
      );
      localStorage.removeItem("login");
      navigate("/");
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Box mt={4}>
        <Card>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 4,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <EditIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ mb: 5 }}>
              Editar informações
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Nome"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="document"
                  name="document"
                  required
                  fullWidth
                  id="document"
                  label="Documento"
                  value={loginInfo.response.cpf}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="telephone"
                  name="telephone"
                  required
                  fullWidth
                  id="telephone"
                  label="Telefone"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="date"
                  autoComplete="birthdate"
                  name="birthdate"
                  required
                  fullWidth
                  id="birthdate"
                  label="Data de nascimento"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="profession"
                  label="Profissão"
                  name="profession"
                  autoComplete="profession"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="description"
                  label="Descrição"
                  name="description"
                  autoComplete="description"
                  multiline
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Salvar
            </Button>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              color="error"
              size="small"
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
              onClick={toggleExcluirContaModal}
            >
              Excluir conta
            </Button>
          </Box>
        </Card>
      </Box>
      <Modal
        open={excluirContaModal}
        handleClose={toggleExcluirContaModal}
        title="Tem certeza que deseja excluir sua conta?"
        onConfirm={onConfirmExcluirConta}
      />
    </Container>
  );
};

export default MinhasInformacoes;
