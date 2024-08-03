import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  isModalVisible: boolean;
}

const initialState: CartState = {
  isModalVisible: false,
};

const cartModalSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showCartModal: (state) => {
      state.isModalVisible = true;
    },
    hideCartModal: (state) => {
      state.isModalVisible = false;
    },
  },
});

export const { showCartModal, hideCartModal } = cartModalSlice.actions;

export const cartModalReducer = cartModalSlice.reducer;
