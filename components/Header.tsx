"use client";

import CartIcon from "./CartIcon";

function Header() {
  return (
    <header className={`bg-black flex justify-between items-center p-4`}>
      <p className="text-3xl font-semibold text-white my-0">My Store</p>
      <CartIcon />
    </header>
  );
}

export default Header;
