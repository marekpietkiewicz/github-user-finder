import type { FC } from "react";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/StarBorderOutlined";
import StarOutlined from "@mui/icons-material/StarOutlined";
import { useTheme } from "@mui/material/styles";
import GreyIcon from "@components/GreyIcon";

interface props {
  handleOnCLick: () => void;
  isGold: boolean;
}

const FavoriteStar: FC<props> = ({ handleOnCLick, isGold = false }) => {
  const theme = useTheme();

  return (
    <IconButton
      sx={{
        ml: 1,
      }}
      onClick={handleOnCLick}
    >
      {isGold ? (
        <StarOutlined sx={{ color: theme.extra.icon.goldColor }} />
      ) : (
        <GreyIcon>
          <StarIcon />
        </GreyIcon>
      )}
    </IconButton>
  );
};

export default FavoriteStar;
