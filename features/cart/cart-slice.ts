import { Product } from "@/components/ProductListItem";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const itemInCart = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!itemInCart) {
        state.items = [...state.items, { ...action.payload, quantity: 1 }];
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const productIndex = state.items.findIndex(
        (p) => p.id === action.payload
      );
      state.items.splice(productIndex, 1);
    },
    increaseQuantity: (state, action: PayloadAction<CartItem>) => {
      const index = state.items.findIndex(
        (item) => action.payload.id === item.id
      );
      state.items[index] = {
        ...state.items[index],
        quantity: (state.items[index].quantity += 1),
      };
    },
    decreaseQuantity: (state, action: PayloadAction<CartItem>) => {
      const index = state.items.findIndex(
        (item) => action.payload.id === item.id
      );
      if (state.items[index].quantity > 1) {
        state.items[index] = {
          ...state.items[index],
          quantity: (state.items[index].quantity -= 1),
        };
      }
    },
  },
});

export const { addProduct, removeProduct, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
