import { useAppDispatch, useAppSelector } from "@/features/store";
import { MdStar } from "react-icons/md";
import {
  addProduct,
  CartItem,
  removeProduct,
} from "@/features/cart/cart-slice";
import currencyFormatter from "@/utils/numberFormatter";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRating;
}

export interface ProductRating {
  rate: number;
  count: number;
}

interface ListItemProps {
  product: Product;
}

function ProductListItem({ product }: ListItemProps) {
  const dispatch = useAppDispatch();
  const products: CartItem[] = useAppSelector((state) => state.cart.items);

  return (
    <section className="flex flex-col justify-center items-center gap-1 p-2 bg-white min-h-[350px] shadow-lg rounded-md">
      <div className="flex flex-col flex-1 justify-center items-center w-full">
        <div className="w-[200px] h-[200px] flex justify-center">
          <img
            alt={product.title}
            src={product.image}
            className="p-2 max-w-[200px] max-h-[200px]"
          />
        </div>
        <h4 className="text-left w-full">{product.title}</h4>
        <div className="flex items-center justify-between w-full">
          <p className="font-bold text-2xl">
            {currencyFormatter.format(product.price)}
          </p>
          <p className="flex items-center gap-1 font-semibold mr-2">
            <MdStar className="text-yellow-500 w-6 h-6" />
            <span className="text-gray-700">{product.rating.rate}</span> / 5
          </p>
        </div>
      </div>
      {products.filter((item) => item.id === product.id).length === 0 ? (
        <button
          onClick={() => dispatch(addProduct(product))}
          className="text-white bg-green-500 p-2 rounded"
        >
          Adicionar ao Carrinho
        </button>
      ) : (
        <button
          onClick={() => dispatch(removeProduct(product.id))}
          className="text-white bg-red-500 p-2 rounded"
        >
          Remover do carrinho
        </button>
      )}
    </section>
  );
}

export default ProductListItem;
