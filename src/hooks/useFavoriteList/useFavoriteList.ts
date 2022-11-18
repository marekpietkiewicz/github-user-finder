import { useSelector } from "react-redux";
import type { StoreState } from "src/store";
import { doWeHaveThatUserInStack } from "@reducers/favoriteReducer";

export default function useFavoriteList() {
  const currentAppState = useSelector(
    (state: StoreState) => state.favorite.appState
  );

  const favoriteList = useSelector(
    (state: StoreState) => state.favorite.favoritesUsers
  );

  const userIsInFavoriteList = (userId: string) => {
    return doWeHaveThatUserInStack(favoriteList, userId);
  };

  return { favoriteList, currentAppState, userIsInFavoriteList };
}
