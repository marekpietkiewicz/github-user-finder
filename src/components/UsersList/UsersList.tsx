import { FC } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SearchUser from "./SearchUser";
import List from "@mui/material/List";
import { useSelector, useDispatch } from "react-redux";
import {
  appState,
  changeSelectedUser,
  addUserToFavorites,
  removeUserFromFavorites,
} from "@reducers/favoriteReducer";
import type { favoritesUsersType } from "@reducers/favoriteReducer";
import useFavoriteList from "@services/useFavoriteList";

interface props {
  users: favoritesUsersType[];
}

const UsersList: FC<props> = ({ users }) => {
  // const theme = useTheme();

  // console.log("UsersList", users.length);
  const dispatch = useDispatch();

  const { userIsInFavoriteList } = useFavoriteList();

  const handleClickOnUser = (userId: string) => {
    dispatch(changeSelectedUser(userId));
  };

  const handleClickOnFavorite = (
    user: favoritesUsersType,
    isFavorite: boolean
  ) => {
    if (!isFavorite) {
      dispatch(addUserToFavorites(user));
    } else {
      dispatch(removeUserFromFavorites(user.id));
    }
  };

  return (
    <Card sx={{ minWidth: 552, boxShadow: 3 }}>
      {/* <CardContent> */}
      <List
        sx={{
          // width: 1,
          // position: "relative",
          // bgcolor: "background.paper",
          padding: "10px",
        }}
      >
        {users.map((user, index) => (
          <SearchUser
            key={user.id}
            user={user}
            handleClickOnUser={handleClickOnUser}
            handleClickOnFavorite={handleClickOnFavorite}
            showDivider={users.length > index + 1}
            isInFavoriteList={userIsInFavoriteList(user.id)}
          />
        ))}
      </List>
      {/* </CardContent> */}
    </Card>
  );
};

export default UsersList;
