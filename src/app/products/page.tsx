import Products from "../components/Products";
export default async function ProductsPage() {
  let products = [];
  try {
    const response = await fetch("http://localhost:3000/api/products");
    if (!response.ok) {
      throw new Error("failed to fetch products!");
    }
    products = await response.json();
  } catch (error) {
    console.error(error);
    return <div> Error Loading the Products please try again</div>;
  }
  return (
    <>
      <h1>Products</h1>
      <Products products={products} />
    </>
  );
}
