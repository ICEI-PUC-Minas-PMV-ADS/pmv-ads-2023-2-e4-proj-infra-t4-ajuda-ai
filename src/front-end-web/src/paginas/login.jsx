/* eslint-disable react/prop-types */
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { Card, CssBaseline } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = new FormData(event.currentTarget);

    try {
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
    <Container component="main" maxWidth="sm">
      <Box mt={4}>
        <Card>
          <CssBaseline />
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
              Login
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                loading={loading}
              >
                Entrar
              </LoadingButton>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/cadastro" variant="body2">
                    {"Cadastre-se aqui"}
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

export default Login;
