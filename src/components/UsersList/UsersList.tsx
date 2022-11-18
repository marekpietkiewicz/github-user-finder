import { FC } from "react";
import Card from "@mui/material/Card";
import SearchUser from "./SearchUser";
import List from "@mui/material/List";
import { useDispatch } from "react-redux";
import {
  changeSelectedUser,
  addUserToFavorites,
  removeUserFromFavorites,
} from "@reducers/favoriteReducer";
import type { favoritesUsersType } from "@reducers/favoriteReducer";
import useFavoriteList from "@hooks/useFavoriteList";

interface props {
  users: favoritesUsersType[];
}

const UsersList: FC<props> = ({ users }) => {
  const dispatch = useDispatch();

  const { userIsInFavoriteList } = useFavoriteList();

  const handleClickOnUser = (user: favoritesUsersType) => {
    dispatch(changeSelectedUser(user));
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
      <List
        sx={{
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
    </Card>
  );
};

export default UsersList;
