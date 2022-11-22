import { FC, useState, useEffect, useCallback } from "react";
import Card from "@mui/material/Card";
import SearchUser from "@components/Shared/SearchUser";
import List from "@mui/material/List";
import { useDispatch, useSelector } from "react-redux";
import { changeSelectedUser } from "@reducers/favoriteReducer";
import type { favoritesUsersType } from "@reducers/favoriteReducer";
import useFavoriteList from "@hooks/useFavoriteList";
import InfiniteScroll from "react-infinite-scroller";
import { useLazyGetGithubUserByNameQuery } from "@services/githubApi";
import NoSearchResults from "@components/Shared/NoSearchResults";
import { StoreState } from "src/store";

const SEARCH_PER_PAGE: number = 10;

const UsersList: FC = () => {
  const dispatch = useDispatch();

  const [trigger, { data, error, isLoading }] =
    useLazyGetGithubUserByNameQuery();

  const [usersList, setUsersList] = useState<favoritesUsersType[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);

  const { userIsInFavoriteList, handleAddOrRemoveUserInFavorites } =
    useFavoriteList();

  const searchedQuery = useSelector(
    (state: StoreState) => state.favorite.searchedQuery
  );

  const handleClickOnUser = (user: favoritesUsersType) => {
    dispatch(changeSelectedUser(user));
  };

  const fetchItems = useCallback(
    (pageNumber: number = 1) => {
      if (!isLoading && !error && !!searchedQuery) {
        setHasMore(false);
        trigger(
          {
            page: pageNumber,
            per_page: SEARCH_PER_PAGE,
            q: searchedQuery,
          },
          true
        );
        setPageNumber(pageNumber + 1);
      }
    },
    [error, isLoading, searchedQuery, trigger]
  );

  useEffect(() => {
    if (!!data) {
      setUsersList([...usersList, ...data]);
      if (data?.length === SEARCH_PER_PAGE) setHasMore(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    setUsersList([]);
    fetchItems();
  }, [fetchItems, searchedQuery]);

  const [pageNumber, setPageNumber] = useState(1);

  const loader = (
    <div key="loader" className="loader">
      Loading ...
    </div>
  );

  if (!usersList.length) {
    return <NoSearchResults />;
  }

  return (
    <Card sx={{ minWidth: 552, boxShadow: 3 }}>
      <InfiniteScroll
        pageStart={1}
        loadMore={() => fetchItems(pageNumber)}
        hasMore={hasMore}
        loader={loader}
      >
        <List
          sx={{
            padding: "10px",
          }}
        >
          {usersList.map((user, index) => (
            <SearchUser
              key={user.id}
              user={user}
              handleClickOnUser={handleClickOnUser}
              handleClickOnFavorite={handleAddOrRemoveUserInFavorites}
              showDivider={usersList.length > index + 1}
              isInFavoriteList={userIsInFavoriteList(user.id)}
            />
          ))}
        </List>
      </InfiniteScroll>
    </Card>
  );
};

export default UsersList;
