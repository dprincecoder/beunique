import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  status: "idle",
  error: null,
};

export const fetchNewProducts = createAsyncThunk(
  "slider/fetchNewProducts",
  async () => {
    const endpoints = [
      "short-dress",
      "long-dress",
      "two-piece",
      "gown",
      "jumpsuit",
    ];

    const responses = await Promise.all(
      endpoints.map((endpoint) =>
        axios.get(`https://beunique.live/users/get_dress/${endpoint}`)
      )
    );

    const products = responses.reduce(
      (acc, { data: { detail } }) => acc.concat(detail),
      []
    );

    return products;
  }
);

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNewProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchNewProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default sliderSlice.reducer;
