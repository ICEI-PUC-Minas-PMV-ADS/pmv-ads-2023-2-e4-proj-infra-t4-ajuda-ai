import {
  Avatar,
  Box,
  Card,
  Container,
  CssBaseline,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Inicio = () => {
  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <Box my={2}>
        <Card sx={{ cursor: "pointer" }}>
          <Box display="flex" gap={1}>
            <Box m={1}>
              <Avatar sx={{ m: 1, bgcolor: "default" }}>
                <AccountCircleIcon />
              </Avatar>
            </Box>
            <Box display="flex" flexDirection="column" gap={1} p={2}>
              <Typography>Nome: Amanda</Typography>
              <Typography>Profissão: Engenheira de Software</Typography>
              <Typography>
                Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nullam rhoncus, nulla sed cursus consectetur, risus sapien
                tincidunt erat, sed vulputate nisl ipsum a dolor. Phasellus
                consectetur sem et dolor porttitor mollis. Aenean fringilla
                metus at justo eleifend, nec pulvinar lacus lobortis. Etiam eu
                aliquet tortor, vitae convallis magna. Etiam porttitor sit amet
                felis at venenatis. Mauris maximus luctus ligula ac pulvinar.
                Nulla dignissim pellentesque porttitor. Nunc interdum laoreet
                tellus vel viverra.
              </Typography>
            </Box>
          </Box>
        </Card>
      </Box>
    </Container>
  );
};

export default Inicio;
