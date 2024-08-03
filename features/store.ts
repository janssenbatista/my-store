import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart/cart-slice";
import { cartModalReducer } from "./cart-modal/cart-modal-slice";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartModal: cartModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
