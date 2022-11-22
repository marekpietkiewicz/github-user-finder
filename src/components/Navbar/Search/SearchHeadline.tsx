import { FC, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import Icon from "@components/Shared/GreyIcon";
import { changeSearchedQuery } from "@reducers/favoriteReducer";
import { useDispatch, useSelector } from "react-redux";
import useDebounce from "@hooks/useDebounce";
import { StoreState } from "src/store";

const Search: FC = () => {
  const dispatch = useDispatch();
  const searchedQuery = useSelector(
    (state: StoreState) => state.favorite.searchedQuery
  );

  const [searchValue, setSearchValue] = useState(searchedQuery);
  const debouncedValue = useDebounce(searchValue, 500);

  useEffect(() => {
    dispatch(changeSearchedQuery(debouncedValue));
  }, [debouncedValue, dispatch]);

  const handleSearchInputChange = (value: string) => {
    setSearchValue(value);
  };

  return (
    <Box sx={{ ml: 2, display: "flex", width: 1 }}>
      <Icon>
        <SearchIcon />
      </Icon>
      <InputBase
        id="input-with-sx"
        sx={{ ml: 2, width: 1 }}
        placeholder="Search for GitHub users..."
        value={searchValue}
        onChange={({ target }) => handleSearchInputChange(target.value)}
      />
    </Box>
  );
};

export default Search;
