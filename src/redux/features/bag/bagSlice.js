// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   cart: [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const itemInCart = state.cart.find(
//         (item) => item.id === action.payload.id
//       );
//       if (itemInCart) {
//         itemInCart.quantity++;
//       } else {
//         state.cart.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     incrementQuantity: (state, action) => {
//       const item = state.cart.find((item) => item.id === action.payload);
//       item.quantity++;
//     },
//     decrementQuantity: (state, action) => {
//       const item = state.cart.find((item) => item.id === action.payload);
//       if (item.quantity === 1) {
//         item.quantity = 1;
//       } else {
//         item.quantity--;
//       }
//     },
//     removeItem: (state, action) => {
//       const removeItem = state.cart.filter(
//         (item) => item.id !== action.payload
//       );
//       state.cart = removeItem;
//     },
//     clearCart: (state) => {
//       state.cart = [];
//     },
//   },
// });

// export const {
//   addToCart,
//   removeItem,
//   clearCart,
//   incrementQuantity,
//   decrementQuantity,
// } = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const BagSlice = createSlice({
  name: "bag",
  initialState: {
    bag: [],
    bagIsOpen: false,
    bagIsClosed: false,
  },

  reducers: {
    addToBag: (state, action) => {
      const itemInBag = state.bag.find((item) => item.id === action.payload.id);

      if (itemInBag) {
        itemInBag.qty++;
        itemInBag.size = action.payload.size;
      } else {
        state.bag.push({ ...action.payload, qty: 1 });
      }
    },
    increaseQty: (state, action) => {
      const item = state.bag.find((item) => item.id === action.payload);
      item.qty++;
    },
    decreaseQty: (state, action) => {
      const item = state.bag.find((item) => item.id === action.payload);
      if (item.qty === 1) {
        // item.qty = 1;
        const removeItem = state.bag.filter(
          (item) => item.id !== action.payload
        );
        state.bag = removeItem;
      } else {
        item.qty--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.bag.filter((item) => item.id !== action.payload);
      state.bag = removeItem;
    },
    toggleBagIsOpen: (state, action) => {
      state.bagIsOpen = !action.payload;
    },
    toggleBagIsClosed: (state, action) => {
      state.bagIsClosed = !action.payload;
    },
  },
});

const BagReducer = BagSlice.reducer;

export default BagReducer;

export const {
  addToBag,
  increaseQty,
  decreaseQty,
  removeItem,
  toggleBagIsOpen,
  toggleBagIsClosed,
} = BagSlice.actions;
