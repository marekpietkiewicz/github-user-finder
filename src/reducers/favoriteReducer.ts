import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const appState: Record<string, appStateTypes> = {
  search: "search",
  favorites: "favorites",
};

export type appStateTypes = "search" | "favorites";
export interface favoritesUsersType {
  id: number;
  name: string;
  description: string;
}

interface storeInterface {
  appState: appStateTypes;
  favoritesUsers: favoritesUsersType | [];
}

export const initialState: storeInterface = {
  appState: appState.search,
  favoritesUsers: [],
};

export const favoriteReducer = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    changeAppState: (state, action: PayloadAction<appStateTypes>) => {
      state.appState = action.payload;
    },
  },
});

export const { changeAppState } = favoriteReducer.actions;

export default favoriteReducer.reducer;
