"use client";

import { useEffect, useState } from "react";
import ProductListItem, { Product } from "./ProductListItem";
import axios from "axios";

function ProductList() {
  const [products, setProducs] = useState<Product[]>([]);

  const getProducts = async () => {
    const response = await axios.get<Product[]>(
      "https://fakestoreapi.com/products?limit=20"
    );
    if (response.status === 200) {
      const products: Product[] = response.data;
      setProducs(products);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {products.length > 0 ? (
        <main
          className={`grid justify-center p-4 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5`}
        >
          {products.map((product) => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </main>
      ) : (
        <main className="text-center">Carregando produtos...</main>
      )}
    </>
  );
}

export default ProductList;
