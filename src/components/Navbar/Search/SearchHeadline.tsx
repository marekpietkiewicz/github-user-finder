import { FC } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import Icon from "@components/GreyIcon";

const Search: FC = () => (
  <Box sx={{ ml: 2, display: "flex", width: 1 }}>
    <Icon>
      <SearchIcon />
    </Icon>
    <InputBase
      id="input-with-sx"
      sx={{ ml: 2, width: 1 }}
      placeholder="Search for GitHub users..."
    />
  </Box>
);

export default Search;
