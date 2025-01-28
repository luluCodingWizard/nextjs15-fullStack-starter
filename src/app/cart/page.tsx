import Carts from "../components/Carts";
export default async function CartPage() {
  const response = await fetch("http://localhost:3000/api/users/1/cart");
  const cartProducts = await response.json();
  return <Carts initialProducts={cartProducts} />;
}
