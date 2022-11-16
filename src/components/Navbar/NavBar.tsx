import { FC } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import FavoriteStar from "@components/FavoriteStar";
import Search from "@components/Navbar/Search";
import Favorites from "@components/Navbar/Favorites";
import { StoreState } from "src/store";
import { appState, changeAppState } from "@reducers/favoriteReducer";

const NavBar: FC = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const currentAppState = useSelector(
    (state: StoreState) => state.favorite.appState
  );

  const handleOnCLick = () => {
    if (currentAppState === appState.search) {
      //will be disabled
      dispatch(changeAppState(appState.favorites));
    } else {
      //will be enabled
      dispatch(changeAppState(appState.search));
    }
  };

  return (
    <Box sx={{ flexGrow: 1, width: 1 }}>
      <AppBar
        position="static"
        sx={{ width: 1, backgroundColor: theme.palette.common.white }}
      >
        <Container
          sx={{
            width: theme.extra.navbar.width,
          }}
        >
          <Toolbar disableGutters>
            <Box
              sx={{
                display: "flex",
                width: 1,
                alignItems: "center",
              }}
            >
              {currentAppState === appState.search ? (
                <Search />
              ) : (
                <Favorites handleOnCLick={handleOnCLick} />
              )}
              <FavoriteStar
                handleOnCLick={handleOnCLick}
                isGold={currentAppState === appState.favorites}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default NavBar;
