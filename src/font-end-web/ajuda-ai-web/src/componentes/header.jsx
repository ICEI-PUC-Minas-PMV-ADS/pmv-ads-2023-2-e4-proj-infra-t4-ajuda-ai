import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import MenuDropdown from "./menu-dropdown";

import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { loginInfo } = useContext(LoginContext);
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap", backgroundColor: "secondary.main" }}>
        <Box noWrap sx={{ flexGrow: 1 }}>
          <Typography
            variant="h4"
            color="primary.main"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate(loginInfo.email ? "/inicio" : "/")}
          >
            Ajuda
            <Typography color="white" variant="span" fontWeight="600">
              Aí
            </Typography>
          </Typography>
        </Box>
        {loginInfo.email ? (
          <MenuDropdown />
        ) : (
          <>
            <Button href="/login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
              Login
            </Button>
            <Button
              href="/cadastro"
              variant="contained"
              sx={{ my: 1, mx: 1.5 }}
            >
              Cadastro
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
