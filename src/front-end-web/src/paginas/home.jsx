import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";

const Home = () => {
  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <Box mt={15}>
        <Grid container gap={2}>
          <Grid
            item
            xs={6}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            gap={2}
          >
            <Typography variant="h2" color="primary">
              Encontre a ajuda que você precisa aqui.
            </Typography>
            <Box>
              <Button
                href="/cadastro"
                variant="contained"
                size="large"
                color="secondary"
                sx={{ my: 1, mx: 1.5 }}
              >
                Cadastre-se
              </Button>
              <Button
                href="/login"
                variant="outlined"
                size="large"
                color="secondary"
                sx={{ my: 1, mx: 1.5 }}
              >
                Login
              </Button>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              component="img"
              src="../../public/home-image.svg"
              sx={{
                width: 700,
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
