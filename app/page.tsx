"use client";

import Cart from "@/components/Cart";
import Header from "@/components/Header";
import ProductList from "@/components/ProductList";
import { useAppSelector } from "@/features/store";
import { useState, useEffect } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

export default function HomePage() {
  const { items } = useAppSelector((state) => state.cart);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [showBadge, setShowBadge] = useState(false);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (scrollPosition > 120) {
      setShowBadge(true);
    } else {
      setShowBadge(false);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div className="transition-all ease-linear duration-300">
      <Header />
      <ProductList />
      <Cart />
      {showBadge && (
        <div
          className="fixed bottom-4 right-8 transition-colors ease-linear duration-300 bg-black hover:bg-black/[0.9] w-[32px] h-[32px] rounded-[50%] cursor-pointer"
          onClick={handleScrollUp}
        >
          <div className="w-full h-full flex items-center justify-center">
            <MdKeyboardArrowUp className="text-white w-6 h-6" />
          </div>
        </div>
      )}
    </div>
  );
}
