"use client";
import { useState } from "react";
import { productsData } from "../data";
import CartItem from "../components/CartItem";
import { IProduct } from "../types/product";
export default function CartPage() {
  const [cartIds, setCartIds] = useState(["111", "222"]);

  const cartProducts = cartIds
    .map((id) => productsData.find((product) => product.id === id))
    .filter(Boolean); // Exclude any undefined entries;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cartProducts.length > 0 ? (
        <ul className="space-y-4">
          {cartProducts.map((product) => (
            <CartItem product={product as IProduct} key={product!.id} />
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
}
