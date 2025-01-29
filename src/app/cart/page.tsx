import { Suspense } from "react";
import CartsPage from "../pages/CartsPage";

// server component
export default async function CartPage() {
  return (
    <Suspense fallback={<div>loading....</div>}>
      <CartsPage />
    </Suspense>
  );
}
