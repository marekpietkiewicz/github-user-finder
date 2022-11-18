import rootReducer from "@reducers/rootReducer";
import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import {
  appState,
  changeSelectedUser,
  changeAppState,
} from "@reducers/favoriteReducer";

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: changeSelectedUser,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();
    listenerApi.dispatch(changeAppState(appState.user));
  },
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export type StoreState = ReturnType<typeof store.getState>;
