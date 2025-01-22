import React from "react";
import { IProduct } from "../types/product";
import Product from "./Product";

const Products: React.FC<{ products: IProduct[] }> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
