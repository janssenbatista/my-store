"use client";

import CartIcon from "./CartIcon";

function Header() {
  return (
    <header className="bg-black p-3 sticky top-0 left-0 w-full">
      <div className="flex items-center justify-between w-full">
        <p className="text-3xl font-semibold text-white my-0">My Store</p>
        <CartIcon />
      </div>
    </header>
  );
}

export default Header;
