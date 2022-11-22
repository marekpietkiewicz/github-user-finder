import { FC } from "react";
import Card from "@mui/material/Card";
import SearchUser from "@components/Shared/SearchUser";
import List from "@mui/material/List";
import { useDispatch } from "react-redux";
import { changeSelectedUser } from "@reducers/favoriteReducer";
import type { favoritesUsersType } from "@reducers/favoriteReducer";
import useFavoriteList from "@hooks/useFavoriteList";

const UsersList: FC = () => {
  const dispatch = useDispatch();

  const { favoriteList } = useFavoriteList();

  const { userIsInFavoriteList, handleAddOrRemoveUserInFavorites } =
    useFavoriteList();

  const handleClickOnUser = (user: favoritesUsersType) => {
    dispatch(changeSelectedUser(user));
  };

  return (
    <Card sx={{ minWidth: 552, boxShadow: 3 }}>
      <List
        sx={{
          padding: "10px",
        }}
      >
        {favoriteList.map((user, index) => (
          <SearchUser
            key={user.id}
            user={user}
            handleClickOnUser={handleClickOnUser}
            handleClickOnFavorite={handleAddOrRemoveUserInFavorites}
            showDivider={favoriteList.length > index + 1}
            isInFavoriteList={userIsInFavoriteList(user.id)}
          />
        ))}
      </List>
    </Card>
  );
};

export default UsersList;
