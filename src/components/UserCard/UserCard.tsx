import type { FC } from "react";
import Card from "@mui/material/Card";
import type { favoritesUsersType } from "@reducers/favoriteReducer";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FavoriteStar from "@components/Shared/FavoriteStar";
import useFavoriteList from "@hooks/useFavoriteList";

interface userCardProps {
  user: favoritesUsersType | null;
}

interface statsProps {
  quantity: number;
  label: string;
}

const Stats: FC<statsProps> = ({ quantity, label }) => {
  return (
    <Box sx={{ mr: 4, textAlign: "center", marginTop: "auto" }}>
      <Typography variant="h5" component="div">
        {quantity}
      </Typography>
      <Typography fontSize={10} color="text.secondary" component="div">
        {label}
      </Typography>
    </Box>
  );
};

const UserCard: FC<userCardProps> = ({ user }) => {
  const { userIsInFavoriteList, handleAddOrRemoveUserInFavorites } =
    useFavoriteList();

  if (!user) return <div>Error</div>;

  return (
    <Card sx={{ display: "flex", p: 2 }}>
      <Paper
        sx={{
          p: 0,
          m: 0,
          minWidth: "150px",
          minHeight: "150px",
          background: `url("${user.logo}") center`,
          backgroundSize: "cover",
          borderRadius: "7px",
        }}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto", p: 0, paddingLeft: "10px" }}>
          <Typography component="div" variant="h5">
            {user.name}
          </Typography>
          <Typography fontSize={14} color="#2D9CDB" component="div">
            @alexcrichton
          </Typography>
          <Typography fontSize={14} color="text.secondary" component="div">
            {user.description}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 1,
            pb: 0,
            marginBottom: "auto",
          }}
        >
          <Stats quantity={4161} label={"FOLLOWERS"} />
          <Stats quantity={16} label={"FOLLOWING"} />
          <Stats quantity={123} label={"REPOS"} />
        </Box>
      </Box>
      <Box sx={{ mr: "-6px", marginLeft: "auto" }}>
        <FavoriteStar
          handleOnCLick={() => handleAddOrRemoveUserInFavorites(user)}
          isGold={userIsInFavoriteList(user.id)}
        />
      </Box>
    </Card>
  );
};

export default UserCard;
