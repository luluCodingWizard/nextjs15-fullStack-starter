"use client";
import React, { useState } from "react";
import { IProduct } from "../types/product";
import CartItem from "./CartItem";

const Carts = ({ initialProducts }: { initialProducts: IProduct[] }) => {
  const [cartProducts, setCartProducts] = useState(initialProducts || []);

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
};

export default Carts;
