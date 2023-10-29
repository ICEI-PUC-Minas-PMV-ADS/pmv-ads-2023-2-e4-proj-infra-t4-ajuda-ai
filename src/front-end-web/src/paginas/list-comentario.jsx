import { Container, CssBaseline } from "@mui/material";
import ListagemComentario from "../componentes/listagem-comentario";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";


const ListComentario = () => {
  const navigate = useNavigate();

  const { data: listagemComentarios } = useQuery("listagemComentarios", async () => {
    const response = axios.get(
      "https://ajuda-ai-backend.onrender.com/api/comentarios",
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
      {listagemComentarios?.data?.map((item, index) => (
        <ListagemComentario
          dados={item}
          key={index}
          onClick={() => navigate(`/${item._id}`)}
        />
      ))}
    </Container>
  );
};

export default ListComentario;
