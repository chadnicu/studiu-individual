"use client";

import { CartItemValues, ShoppingCartContext } from "@/app/global-context";
import { useContext } from "react";

export default function AddToCart({ product }: { product: CartItemValues }) {
  const { addToCart } = useContext(ShoppingCartContext);

  return (
    <button
      className="rounded-full bg-lightBlue px-7 py-3 font-semibold duration-300 hover:scale-110"
      onClick={() => addToCart(product)}
    >
      Add to cart
    </button>
  );
}
