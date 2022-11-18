import { FC } from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Icon from "@components/GreyIcon";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

interface props {
  handleOnCLick: () => void;
  text: string;
}

const FavoritesHeadline: FC<props> = ({ handleOnCLick, text }) => (
  <>
    <IconButton onClick={handleOnCLick}>
      <Icon>
        <ArrowBackOutlinedIcon />
      </Icon>
    </IconButton>
    <Typography
      color="black"
      fontSize={21}
      sx={{
        display: "flex",
        width: 1,
        ml: 0,
        mt: "4px",
      }}
    >
      {text}
    </Typography>
  </>
);

export default FavoritesHeadline;
