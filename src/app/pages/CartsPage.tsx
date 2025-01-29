import { use } from "react";
import Carts from "../components/Carts";

// a function to fetch cart data
async function fetchCartData() {
  const response = await fetch("http://localhost:3000/api/users/2/cart");

  if (!response.ok) {
    throw new Error("Failed to fetch cart products");
  }

  return response.json(); // Returns the cart products as JSON
}

const CartsPage = () => {
  const cartProducts = use(fetchCartData());
  return <Carts initialProducts={cartProducts} />;
};

export default CartsPage;
