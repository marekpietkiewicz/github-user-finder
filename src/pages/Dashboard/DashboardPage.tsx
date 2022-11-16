import { FC } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";

import NavBar from "@components/Navbar";
import { StoreState } from "src/store";
import { appState } from "@reducers/favoriteReducer";

const DashboardPage: FC = () => {
  const currentAppState = useSelector(
    (state: StoreState) => state.favorite.appState
  );

  const theme = useTheme();
  return (
    <>
      <NavBar />
      <Container component="main" sx={{ width: theme.extra.navbar.width }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box component="form" noValidate sx={{ mt: 1, width: 1 }}>
            {currentAppState === appState.search
              ? "main list"
              : "favorites list"}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default DashboardPage;
