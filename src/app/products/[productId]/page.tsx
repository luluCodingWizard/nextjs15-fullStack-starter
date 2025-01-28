import ButtonNavigateBack from "@/app/components/ButtonNavigateBack";

import Image from "next/image";
export default async function ProductDetailPage({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = await params;
  let product;
  try {
    // Fetch the product details from the API
    const response = await fetch(
      `http://localhost:3000/api/products/${productId}`
    );
    // Handle 404 scenario
    if (response.status === 404) {
      return (
        <div className="container mx-auto p-4">
          <ButtonNavigateBack />
          <h1 className="text-xl font-bold text-red-500 mt-12">
            Product not found.
          </h1>
        </div>
      );
    }
    // Handle other errors (e.g., server down, etc.)
    if (!response.ok) {
      throw new Error("Failed to fetch the product details.");
    }
    product = await response.json();
  } catch (error) {
    console.error(error);
  }
  return (
    <div className="container mx-auto p-4">
      <ButtonNavigateBack />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-12">
        <div className="">
          <Image
            src={product!.imageUrl}
            alt={product!.name}
            width={550}
            height={550}
            priority
          />
        </div>
        <div className="">
          <p className="text-primary">NEW PRODUCT</p>
          <h1 className="text-3xl font-bold mb-4">{product!.name}</h1>

          <p className="text-darkGray text-xs">{product!.description}</p>

          <p className="text-black text-lg mb-4 mt-10">
            ${product!.price.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
