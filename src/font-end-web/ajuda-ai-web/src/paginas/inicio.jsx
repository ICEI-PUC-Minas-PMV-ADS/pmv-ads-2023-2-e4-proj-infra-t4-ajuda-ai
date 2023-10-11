import {
  Avatar,
  Box,
  Card,
  Container,
  CssBaseline,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CardListagem from "../componentes/card-listagem";
import { useNavigate } from "react-router-dom";

export const listagem = [
  {
    id: 1,
    nome: "Amanda",
    profissao: "Engenheira de Software",
    dataDeNascimento: "12/06/1995",
    documento: "85.138.786/0001-60",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus, nulla sed cursus consectetur, risus sapien tincidunt erat, sed vulputate nisl ipsum a dolor. Phasellus consectetur sem et dolor porttitor mollis. Aenean fringilla metus at justo eleifend, nec pulvinar lacus lobortis. Etiam eu aliquet tortor, vitae convallis magna. Etiam porttitor sit amet felis at venenatis. Mauris maximus luctus ligula ac pulvinar. Nulla dignissim pellentesque porttitor. Nunc interdum laoreet tellus vel viverra.",
  },
  {
    id: 2,
    nome: "Marcus",
    profissao: "Engenheiro de Software",
    dataDeNascimento: "12/06/1995",
    documento: "85.138.786/0001-60",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus, nulla sed cursus consectetur, risus sapien tincidunt erat, sed vulputate nisl ipsum a dolor. Phasellus consectetur sem et dolor porttitor mollis. Aenean fringilla metus at justo eleifend, nec pulvinar lacus lobortis. Etiam eu aliquet tortor, vitae convallis magna. Etiam porttitor sit amet felis at venenatis. Mauris maximus luctus ligula ac pulvinar. Nulla dignissim pellentesque porttitor. Nunc interdum laoreet tellus vel viverra.",
  },
  {
    id: 3,
    nome: "Luiz Fernando",
    profissao: "Engenheiro de Software",
    dataDeNascimento: "12/06/1995",
    documento: "85.138.786/0001-60",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus, nulla sed cursus consectetur, risus sapien tincidunt erat, sed vulputate nisl ipsum a dolor. Phasellus consectetur sem et dolor porttitor mollis. Aenean fringilla metus at justo eleifend, nec pulvinar lacus lobortis. Etiam eu aliquet tortor, vitae convallis magna. Etiam porttitor sit amet felis at venenatis. Mauris maximus luctus ligula ac pulvinar. Nulla dignissim pellentesque porttitor. Nunc interdum laoreet tellus vel viverra.",
  },
  {
    id: 4,
    nome: "Patrick",
    profissao: "Engenheiro de Software",
    dataDeNascimento: "12/06/1995",
    documento: "85.138.786/0001-60",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus, nulla sed cursus consectetur, risus sapien tincidunt erat, sed vulputate nisl ipsum a dolor. Phasellus consectetur sem et dolor porttitor mollis. Aenean fringilla metus at justo eleifend, nec pulvinar lacus lobortis. Etiam eu aliquet tortor, vitae convallis magna. Etiam porttitor sit amet felis at venenatis. Mauris maximus luctus ligula ac pulvinar. Nulla dignissim pellentesque porttitor. Nunc interdum laoreet tellus vel viverra.",
  },
];

const Inicio = () => {
  const navigate = useNavigate();

  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      {listagem.map((item) => (
        <CardListagem
          dados={item}
          key={item.id}
          onClick={() => navigate(`/${item.id}`)}
        />
      ))}
    </Container>
  );
};

export default Inicio;
