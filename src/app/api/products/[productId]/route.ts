import { NextRequest, NextResponse } from "next/server";
import connectMangoDB from "@/app/utils/db";

export async function GET(
  request: NextRequest,
  { params }: { params: { productId: string } }
) {
  const { db } = await connectMangoDB();
  const id = await params.productId;

  const product = await db.collection("products").findOne({ id });

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
