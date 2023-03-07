import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./features/admin/adminSlice";
import authReducer from "./features/auth/authSlice";
import cartReducer from "./features/cart/cartslice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminReducer,
    cartItems: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: true,
});

export const dispatch = store.dispatch;

export default store;
