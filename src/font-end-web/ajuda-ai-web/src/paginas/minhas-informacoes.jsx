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

const MinhasInformacoes = () => {
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Box mt={4}>
        <Card>
          <Box
            component="form"
            onSubmit={() => {}}
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
        </Card>
      </Box>
    </Container>
  );
};

export default MinhasInformacoes;
