import ButtonNavigateBack from "@/app/components/ButtonNavigateBack";
import { productsData } from "@/app/data";
export default function ProductDetailPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = productsData.find((p) => params.productId === p.id);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product!.name}</h1>
      <p className="text-gray-500 text-lg mb-4">${product!.price.toFixed(2)}</p>
      <h3 className="text-xl font-semibold mb-2">Description</h3>
      <p className="text-gray-700">{product!.description}</p>
      <ButtonNavigateBack />
    </div>
  );
}
