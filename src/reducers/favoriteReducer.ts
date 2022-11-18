import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const appState: Record<string, appStateTypes> = {
  search: "search",
  favorites: "favorites",
  user: "user",
};

export type appStateTypes = "search" | "favorites" | "user";
export interface favoritesUsersType {
  id: string;
  description: string;
  name: string;
  logo: string;
}

interface storeInterface {
  appState: appStateTypes;
  favoritesUsers: favoritesUsersType[] | [];
  selectedUser: favoritesUsersType | null;
}

export const initialState: storeInterface = {
  appState: appState.search,
  favoritesUsers: [],
  selectedUser: null,
};

export const doWeHaveThatUserInStack = (
  favoritesUsers: favoritesUsersType[],
  userId: string
): boolean => {
  return !!favoritesUsers.find((user) => user.id === userId);
};

export const favoriteReducer = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    changeAppState: (state, action: PayloadAction<appStateTypes>) => {
      state.appState = action.payload;
    },
    changeSelectedUser: (state, action: PayloadAction<favoritesUsersType>) => {
      state.selectedUser = action.payload;
    },
    addUserToFavorites: (state, action: PayloadAction<favoritesUsersType>) => {
      if (!doWeHaveThatUserInStack(state.favoritesUsers, action.payload.id)) {
        state.favoritesUsers = [...state.favoritesUsers, action.payload];
      }
    },
    removeUserFromFavorites: (state, action: PayloadAction<string>) => {
      if (doWeHaveThatUserInStack(state.favoritesUsers, action.payload)) {
        state.favoritesUsers = state.favoritesUsers.filter(function (user) {
          return user.id !== action.payload;
        });
      }
    },
  },
});

export const {
  changeAppState,
  changeSelectedUser,
  addUserToFavorites,
  removeUserFromFavorites,
} = favoriteReducer.actions;

export default favoriteReducer.reducer;
