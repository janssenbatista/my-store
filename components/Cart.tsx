import { useAppDispatch, useAppSelector } from "@/features/store";
import { MdClear } from "react-icons/md";
import { hideCartModal } from "@/features/cart-modal/cart-modal-slice";
import CartItemComponent from "./CartItemComponent";
import currencyFormatter from "@/utils/numberFormatter";
import React, { useEffect, useRef } from "react";

function Cart() {
  const products = useAppSelector((state) => state.cart.items);
  const { isModalVisible } = useAppSelector((state) => state.cartModal);
  const total = useAppSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );
  const dispatch = useAppDispatch();
  const cartBodyRef = useRef<HTMLDivElement>(null);

  const handleCartClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  useEffect(() => {
    if (isModalVisible) {
      cartBodyRef.current!.style.right = "0";
      setTimeout(() => {
        cartBodyRef.current!.style.backgroundColor = "rgba(0,0,0,0.8)";
        document.body.style.overflowY = "hidden";
      }, 250);
    } else {
      cartBodyRef.current!.style.transition = "all linear 250ms";
      cartBodyRef.current!.style.background = "transparent";
      document.body.style.overflowY = "scroll";
      setTimeout(() => {
        cartBodyRef.current!.style.right = "-100%";
      }, 250);
    }
  }, [isModalVisible]);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(hideCartModal());
    }
  }, [products]);

  return (
    <div
      className={`h-full w-full absolute top-0 transition-all ease-in-out duration-300 right-[-100%]`}
      ref={cartBodyRef}
      onClick={() => dispatch(hideCartModal())}
    >
      <div
        className={`bg-white w-[500px] h-full absolute top-0 right-0`}
        onClick={handleCartClick}
      >
        <div className="flex flex-col items-center justify-center w-full h-full">
          <p className="text-2xl font-semibold mt-4">Carrinho de Compras</p>
          <main className="p-4 w-full flex-1 overflow-y-scroll">
            {products.map((item) => (
              <CartItemComponent key={item.id} item={item} />
            ))}
          </main>
          <MdClear
            onClick={() => dispatch(hideCartModal())}
            className="absolute top-4 left-4 w-8 h-8 cursor-pointer hover:bg-black hover:text-white transition-colors ease-linear duration-150"
          />
          <p className="text-2xl font-semibold text-center bg-black text-white p-2 w-full">
            Total do Carrinho: {currencyFormatter.format(total)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
