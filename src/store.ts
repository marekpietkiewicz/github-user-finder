import rootReducer from "@reducers/rootReducer";
import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import {
  appState,
  changeSelectedUser,
  changeAppState,
} from "@reducers/favoriteReducer";
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { githubApi } from "@services/githubApi";

const listenerMiddleware = createListenerMiddleware();

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

listenerMiddleware.startListening({
  actionCreator: changeSelectedUser,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();
    listenerApi.dispatch(changeAppState(appState.user));
  },
});

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .prepend(listenerMiddleware.middleware)
      .concat(githubApi.middleware),
});

export type StoreState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
