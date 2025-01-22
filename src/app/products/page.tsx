import Products from "../components/Products";
import { productsData } from "../data";
export default function ProductsPage() {
  return (
    <>
      <h1>Products</h1>
      <Products products={productsData} />
    </>
  );
}
