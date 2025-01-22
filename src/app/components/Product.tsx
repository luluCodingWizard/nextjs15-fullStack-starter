import React from "react";
import Image from "next/image";
import { IProduct } from "../types/product";

const Product: React.FC<{ product: IProduct }> = ({ product }) => {
  return (
    <div className="bg-lightGray1 p-6 rounded-lg shadow-md flex flex-col items-center">
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={200}
        height={200}
        className="w-full h-40 object-contain mb-4"
      />
      <h3 className="text-lg font-bold text-black mb-2">{product.name}</h3>
      <p className="text-sm text-primary mb-4">${product.price}</p>
      <button className="btn-primary">SEE PRODUCT</button>
    </div>
  );
};

export default Product;
