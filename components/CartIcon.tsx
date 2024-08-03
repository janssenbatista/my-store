"use client";

import { useAppDispatch, useAppSelector } from "@/features/store";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { showCartModal } from "@/features/cart-modal/cart-modal-slice";

const CartIcon = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.cart.items);

  return (
    <div
      onClick={products.length ? () => dispatch(showCartModal()) : () => {}}
      className={`relative inline-block cursor-pointer mr-6`}
    >
      <FaShoppingCart className="text-[2rem] text-white" />
      {products.length > 0 && (
        <div className="absolute top-[10px] right-[-10px] bg-red-500 w-6 h-6 rounded-[50%] text-center">
          <span className="text-white leading-6 font-semibold">
            {products.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default CartIcon;
