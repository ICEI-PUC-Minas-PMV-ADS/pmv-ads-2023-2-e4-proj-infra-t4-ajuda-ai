import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Card } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";

const Cadastro = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = new FormData(event.currentTarget);

    const formData = {
      nome: `${data.get("firstName")} ${data.get("lastName")}`,
      dataDeNascimento: "1996-03-07",
      telefone: data.get("telephone"),
      email: data.get("email"),
      senha: data.get("password"),
      cpf: data.get("document"),
      foto: "https://img.freepik.com/fotos-gratis/jovem-afro-americano-bonito-com-camiseta-caqui_176420-32042.jpg",
    };

    try {
      await axios.post(
        "https://ajuda-ai-backend.onrender.com/api/usuario",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const response = await axios.post(
        "https://ajuda-ai-backend.onrender.com/api/login-perfil",
        {
          perfil: "usuario",
          email: data.get("email"),
          senha: data.get("password"),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("login", JSON.stringify(response.data));
      setLoading(false);
      navigate("/inicio");
    } catch (error) {
      setLoading(false);
      console.error("Erro:", error);
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <Box mt={4}>
        <CssBaseline />
        <Card>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 4,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Cadastro
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Nome"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Sobrenome"
                    name="lastName"
                    autoComplete="family-name"
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
                    autoComplete="document"
                    name="document"
                    required
                    fullWidth
                    id="document"
                    label="Documento"
                  />
                </Grid>
                <Grid item xs={12}>
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
                    name="password"
                    label="Senha"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                loading={loading}
              >
                Cadastro
              </LoadingButton>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Já tem uma conta? Entre aqui
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Card>
      </Box>
    </Container>
  );
};

export default Cadastro;
