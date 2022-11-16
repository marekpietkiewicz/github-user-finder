import { FC } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

import Icon from "@components/GreyIcon";

const Search: FC = () => (
  <>
    <Icon>
      <SearchIcon />
    </Icon>
    <InputBase
      id="input-with-sx"
      sx={{ ml: 2, width: 1 }}
      placeholder="Search for GitHub users..."
    />
  </>
);

export default Search;
