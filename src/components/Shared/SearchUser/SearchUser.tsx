import { FC } from "react";
import type { favoritesUsersType } from "@reducers/favoriteReducer";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import FavoriteStar from "@components/Shared/FavoriteStar";
import ListItemButton from "@mui/material/ListItemButton";

interface props {
  handleClickOnUser: (user: favoritesUsersType) => void;
  handleClickOnFavorite: (
    user: favoritesUsersType,
    isFavorite: boolean
  ) => void;
  user: favoritesUsersType;
  showDivider: boolean;
  isInFavoriteList: boolean;
}
const SearchUser: FC<props> = ({
  user,
  showDivider,
  handleClickOnUser,
  handleClickOnFavorite,
  isInFavoriteList,
}) => {
  return (
    <>
      <ListItem
        sx={{
          minHeight: "70px",
          padding: 0,
        }}
        divider={showDivider}
      >
        <ListItemButton
          sx={{
            padding: 0,
            "&:hover": {
              textDecoration: "none",
              backgroundColor: "transparent",
              // Reset on touch devices, it doesn't add specificity
              "@media (hover: none)": {
                backgroundColor: "transparent",
              },
            },
          }}
          onClick={() => handleClickOnUser(user)}
        >
          <ListItemAvatar>
            <Avatar alt={user.name} src={user.logo} />
          </ListItemAvatar>
          <ListItemText primary={user.name} secondary={user.description} />
        </ListItemButton>
        <ListItemIcon sx={{ minWidth: "20px" }}>
          <FavoriteStar
            handleOnCLick={() => handleClickOnFavorite(user, isInFavoriteList)}
            isGold={isInFavoriteList}
          />
        </ListItemIcon>
      </ListItem>
    </>
  );
};

export default SearchUser;
