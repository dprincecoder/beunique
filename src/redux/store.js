import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import adminReducer from "./features/admin/adminSlice";
import authReducer from "./features/auth/authSlice";
import bagReducer from "./features/bag/bagSlice";
import sliderReducer from "./features/slider/sliderSlice";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedBagReducer = persistReducer(persistConfig, bagReducer);

const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminReducer,
    slider: sliderReducer,
    bag: persistedBagReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  // devTools: true,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      devTools: true,
    }),
});

export const dispatch = store.dispatch;

export default store;

export const persistor = persistStore(store);
