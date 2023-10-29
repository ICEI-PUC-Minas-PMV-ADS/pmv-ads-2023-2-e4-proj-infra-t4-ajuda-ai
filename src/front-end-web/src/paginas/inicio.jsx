import { Container, CssBaseline } from "@mui/material";
import CardListagem from "../componentes/card-listagem";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

export const listagem = [
  {
    id: "6523581b56c79f0d78e81387",
    nome: "Marcus Ferreira",
    profissao: "Desenvolvedor Web BackEnd",
    dataDeNascimento: "1966-04-04T00:00:00.000Z",
    documento: "810.479.200-85",
    descricao: "Faço desenvolvimento de sites web teste",
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

  const { data: listagemUsuarios } = useQuery("listagemUsuarios", async () => {
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
      {listagemUsuarios?.data?.map((item, index) => (
        <CardListagem
          dados={item}
          key={index}
          onClick={() => navigate(`/${item._id}`)}
        />
      ))}
    </Container>
  );
};

export default Inicio;
