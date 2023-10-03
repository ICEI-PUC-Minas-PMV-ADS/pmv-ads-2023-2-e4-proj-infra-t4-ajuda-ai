import { ThemeProvider, createTheme } from "@mui/material/styles";
import { customTheme } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./componentes/header";
import Login from "./paginas/login";
import Cadastro from "./paginas/cadastro";
import { RotasPublicas, RotasProtegidas } from "./componentes/rotas";
import MinhasInformacoes from "./paginas/minhas-informacoes";
import Inicio from "./paginas/inicio";

function App() {
  const theme = createTheme(customTheme);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<></>} />
          <Route
            path="/login"
            element={
              <RotasPublicas>
                <Login />
              </RotasPublicas>
            }
          />
          <Route
            path="/cadastro"
            element={
              <RotasPublicas>
                <Cadastro />
              </RotasPublicas>
            }
          />
          <Route
            path="/inicio"
            element={
              <RotasProtegidas>
                <Inicio />
              </RotasProtegidas>
            }
          />
          <Route
            path="/minhas-informacoes"
            element={
              <RotasProtegidas>
                <MinhasInformacoes />
              </RotasProtegidas>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
