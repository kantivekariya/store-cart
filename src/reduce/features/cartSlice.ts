// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  quantity: number;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action: any) => {
      const itemInCart = state.cart.find(
        (item: any) => item.id === action.payload.id
      );
      if (itemInCart) {
        // @ts-ignore
        itemInCart.quantity++;
      } else {
        // @ts-ignore
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item: any) => item.id === action.payload);

      // @ts-ignore
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item: any) => item.id === action.payload);
      // @ts-ignore
      if (item.quantity === 1) {
        // @ts-ignore
        item.quantity = 1;
      } else {
        // @ts-ignore
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item: any) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;
