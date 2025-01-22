import ButtonNavigateBack from "@/app/components/ButtonNavigateBack";
import { productsData } from "@/app/data";
import Image from "next/image";
export default async function ProductDetailPage({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = await params;
  const product = productsData.find((p) => productId === p.id);
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
