/* eslint-disable react/prop-types */
import { Avatar, Box, Card, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const CardListagem = ({ dados, onClick }) => {
  return (
    <Box my={2}>
      <Card sx={{ cursor: "pointer" }} onClick={onClick}>
        <Box display="flex" gap={1}>
          <Box m={1}>
            <Avatar sx={{ m: 1, bgcolor: "default" }}>
              <AccountCircleIcon />
            </Avatar>
          </Box>
          <Box display="flex" flexDirection="column" gap={1} p={2}>
            <Typography>Nome: {dados.nome}</Typography>
            <Typography>Profissão: {dados.profissao[0]} </Typography>
            <Typography>Descrição: {dados.descricao} </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default CardListagem;
