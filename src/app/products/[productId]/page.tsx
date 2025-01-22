import { productsData } from "@/app/data";

export default function ProductDetailPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = productsData.find((p) => params.productId === p.id);
  return <h1>{product!.name}</h1>;
}
