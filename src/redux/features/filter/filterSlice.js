import { createSlice } from "@reduxjs/toolkit";

const FilterSlice = createSlice({
  name: "filter",
  initialState: {
    filter: { searchQuery: "", byPrice: "", bySize: "" },
  },

  reducers: {
    addToBag: (state, action) => {
      const itemInBag = state.filter.find(
        (item) => item.id === action.payload.id
      );

      if (itemInBag) {
        itemInBag.qty++;
        itemInBag.size = action.payload.size;
      } else {
        state.filter.push({ ...action.payload, qty: 1 });
      }
    },
    increaseQty: (state, action) => {
      const item = state.filter.find((item) => item.id === action.payload);
      item.qty++;
    },
    decreaseQty: (state, action) => {
      const item = state.filter.find((item) => item.id === action.payload);
      if (item.qty === 1) {
        // item.qty = 1;
        const removeItem = state.filter.filter(
          (item) => item.id !== action.payload
        );
        state.filter = removeItem;
      } else {
        item.qty--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.filter.filter(
        (item) => item.id !== action.payload
      );
      state.filter = removeItem;
    },
  },
});

const FilterReducer = FilterSlice.reducer;

export default FilterReducer;

export const { addToBag, increaseQty, decreaseQty, removeItem } =
  FilterSlice.actions;
