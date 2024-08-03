import { CartItem } from "@/features/cart/cart-slice";
import {
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
} from "@/features/cart/cart-slice";
import { useAppDispatch } from "@/features/store";
import currencyFormatter from "@/utils/numberFormatter";
import { MdClear } from "react-icons/md";

export interface CartItemProps {
  item: CartItem;
}

function CartItemComponent({ item }: CartItemProps) {
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="flex items-center mt-4 w-full">
        <div className="flex items-center justify-center min-w-[100px] w-[100px] h-[100px]">
          <img
            src={item.image}
            alt={item.description}
            className="max-w-[100px] max-h-[100px]"
          />
        </div>
        <div className="flex flex-col p-4 gap-2 flex-1">
          <div className="flex justify-between items-start gap-2">
            <p>{item.title}</p>
            <MdClear
              onClick={() => dispatch(removeProduct(item.id))}
              className="text-red-500 font-semibold min-w-6 min-h-6 cursor-pointer transition-colors ease-linear duration-150 hover:bg-red-500 hover:text-white"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => dispatch(decreaseQuantity(item))}
              className="bg-black p-2 text-white rounded-md"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => dispatch(increaseQuantity(item))}
              className="bg-black p-2 text-white rounded-md"
            >
              +
            </button>
          </div>
          <p>
            <span className="font-semibold">Valor Unitário:</span>{" "}
            {currencyFormatter.format(item.price)}
          </p>
          <p>
            <span className="font-semibold">Valor total do item: </span>
            {currencyFormatter.format(item.price * item.quantity)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartItemComponent;
