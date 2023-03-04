import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories : [],
};

const AdminSlice = createSlice({
  name: "Admin",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = AdminSlice.actions;

export default AdminSlice.reducer;
