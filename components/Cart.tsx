import { useAppDispatch, useAppSelector } from "@/features/store";
import { hideCartModal } from "@/features/cart-modal/cart-modal-slice";
import CartItemComponent from "./CartItemComponent";
import currencyFormatter from "@/utils/numberFormatter";
import React, { useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

function Cart() {
  const products = useAppSelector((state) => state.cart.items);
  const { isModalVisible } = useAppSelector((state) => state.cartModal);
  const total = useAppSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (products.length === 0) {
      dispatch(hideCartModal());
    }
  }, [products]);

  return (
    <>
      <Offcanvas
        show={isModalVisible}
        placement="end"
        onHide={() => dispatch(hideCartModal())}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h3 className="my-0">Carrinho de Compras</h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <main className="flex flex-col gap-4 px-2 py-0 w-full flex-1 overflow-y-scroll">
              {products.map((item) => (
                <CartItemComponent key={item.id} item={item} />
              ))}
            </main>

            <p className="text-2xl font-semibold text-center bg-black text-white p-2 my-0 w-full">
              Total do Carrinho: {currencyFormatter.format(total)}
            </p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
