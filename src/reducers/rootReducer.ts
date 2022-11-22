import { combineReducers } from "@reduxjs/toolkit";
import favorite from "./favoriteReducer";
import { githubApi } from "@services/githubApi";

export default combineReducers({
  favorite,
  [githubApi.reducerPath]: githubApi.reducer,
});
