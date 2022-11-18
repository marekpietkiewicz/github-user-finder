import { FC } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { appState } from "@reducers/favoriteReducer";
import type { favoritesUsersType } from "@reducers/favoriteReducer";
import NavBar from "@components/Navbar";
import type { StoreState } from "src/store";
import UsersList from "@components/UsersList";
import useFavoriteList from "@hooks/useFavoriteList";

const searchUsers: favoritesUsersType[] = [
  {
    id: "111111",
    name: "Ahmed AFsdfd",
    logo: "https://cdn.quasar.dev/img/avatar4.jpg",
    description:
      "Vestibulum mi enim, dignissim quis ultricies non, faucibus non elit.",
  },
  {
    id: "22222",
    name: "Ingrid Dasdszxc",
    logo: "https://cdn.quasar.dev/img/avatar.png",
    description: "",
  },
  {
    id: "3333333",
    name: "Camel Hjkok",
    logo: "https://cdn.quasar.dev/img/avatar3.jpg",
    description: "Aenean bibendum sem sit amet libero facilisis finibus.",
  },
  {
    id: "44444444",
    name: "Bhmed AFsdfd",
    logo: "https://cdn.quasar.dev/img/avatar4.jpg",
    description:
      "Vestibulum mi enim, dignissim quis ultricies non, faucibus non elit.",
  },
  {
    id: "55555555",
    name: "Yngrid Dasdszxc",
    logo: "https://cdn.quasar.dev/img/avatar.png",
    description: "",
  },
  {
    id: "66666666",
    name: "Kamel Hjkok",
    logo: "https://cdn.quasar.dev/img/avatar3.jpg",
    description: "Aenean bibendum sem sit amet libero facilisis finibus.",
  },
];

const DashboardPage: FC = () => {
  const theme = useTheme();
  const { favoriteList } = useFavoriteList();

  const currentAppState = useSelector(
    (state: StoreState) => state.favorite.appState
  );

  const Content = () => {
    switch (currentAppState) {
      case appState.search:
        return <UsersList users={searchUsers} />;
      case appState.favorites:
        return <UsersList users={favoriteList} />;
      case appState.user:
        return <div>User</div>;
      default:
        return <UsersList users={searchUsers} />;
    }
  };

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
            <Content />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default DashboardPage;
