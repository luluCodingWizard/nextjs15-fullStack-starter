import React from "react";

import Link from "next/link";
import { IProduct } from "../types/product";
const CartItem: React.FC<{ product: IProduct }> = ({ product }) => {
  return (
    <li
      key={product.id}
      className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <Link
        href={`/products/${product.id}`}
        className="flex justify-between items-center"
      >
        <div>
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="text-gray-500">${product.price.toFixed(2)}</p>
        </div>
        <span className="text-blue-500 underline">View Details</span>
      </Link>
    </li>
  );
};

export default CartItem;
