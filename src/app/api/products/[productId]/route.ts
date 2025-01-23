import { NextRequest, NextResponse } from "next/server";
import { productsData } from "@/app/data";

export async function GET(
  request: NextRequest,
  { params }: { params: { productId: string } }
) {
  const id = params.productId;

  const product = productsData.find((p) => p.id === id);

  if (!product) {
    return new NextResponse("Product not found", { status: 404 });
  }

  return new NextResponse(JSON.stringify(product), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
