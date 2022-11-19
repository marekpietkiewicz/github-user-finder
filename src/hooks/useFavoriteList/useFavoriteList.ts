import { useSelector } from "react-redux";
import type { StoreState } from "src/store";
import {
  doWeHaveThatUserInStack,
  addOrRemoveUserInFavorites,
  favoritesUsersType,
} from "@reducers/favoriteReducer";
import { useDispatch } from "react-redux";

export default function useFavoriteList() {
  const dispatch = useDispatch();

  const currentAppState = useSelector(
    (state: StoreState) => state.favorite.appState
  );

  const favoriteList = useSelector(
    (state: StoreState) => state.favorite.favoritesUsers
  );

  const userIsInFavoriteList = (userId: string) =>
    doWeHaveThatUserInStack(favoriteList, userId);

  const handleAddOrRemoveUserInFavorites = (user: favoritesUsersType) => {
    dispatch(addOrRemoveUserInFavorites(user));
  };

  return {
    favoriteList,
    currentAppState,
    userIsInFavoriteList,
    handleAddOrRemoveUserInFavorites,
  };
}
