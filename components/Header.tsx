"use client";

import CartIcon from "./CartIcon";

function Header() {
  return (
    <header className={`bg-black flex justify-between items-center p-6`}>
      <p className="text-4xl font-semibold text-white">My Store</p>
      <CartIcon />
    </header>
  );
}

export default Header;
