// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   persistReducer,
//   persistStore,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import adminReducer from "./features/admin/adminSlice";
// import authReducer from "./features/auth/authSlice";
// import cartReducer from "./features/bag/bagSlice";
// const persistConfig = {
//   key: "root",
//   storage,
//   serialize: (value) => JSON.stringify(value), // convert non-serializable values to JSON
//   deserialize: (value) => JSON.parse(value), // parse JSON to restore non-serializable values
//   whitelist: ["cartItems"],
// };

// const rootReducer = combineReducers({
//   auth: authReducer,
//   admin: adminReducer,
//   cartItems: cartReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
//   devTools: true,
//   serializableCheck: {
//     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//   },
// });

// export const dispatch = store.dispatch;
// export const persistor = persistStore(store);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import adminReducer from "./features/admin/adminSlice";
import authReducer from "./features/auth/authSlice";
import bagReducer from "./features/bag/bagSlice";

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
    // bag: bagReducer,
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
