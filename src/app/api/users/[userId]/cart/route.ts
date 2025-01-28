import { NextResponse, NextRequest } from "next/server";
import connectMangoDB from "@/app/utils/db";

export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const { db } = await connectMangoDB();

  const { userId } = await params;

  const userCart = await db.collection("carts").findOne({ userId: userId });

  if (!userCart || !userCart.cartIds || !Array.isArray(userCart.cartIds)) {
    // Handle cases where the userCart or cartIds are missing
    return new NextResponse(JSON.stringify([]), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const cartIds = userCart.cartIds;
  console.log("Cart IDs:", cartIds);

  // Fetch products based on cartIds
  const cartProducts = await db
    .collection("products")
    .find({ id: { $in: cartIds } }) // Ensure cartIds is an array
    .toArray();

  return new NextResponse(JSON.stringify(cartProducts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

type ICartBody = {
  productId: string;
};
export async function POST(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const { db } = await connectMangoDB();
  const { userId } = await params;
  const body: ICartBody = await req.json(); // Parse the request body
  const { productId } = body; // extract the product id from the request body

  const updatedCart = await db.collection("carts").findOneAndUpdate(
    { userId },
    { $push: { cartIds: productId } },
    {
      upsert: true,
      returnDocument: "after",
    }
  );

  const cartProducts = await db
    .collection("products")
    .find({ id: { $in: updatedCart.cartIds } })
    .toArray();

  return new NextResponse(JSON.stringify(cartProducts), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const userID = await params.userId;
  const body: ICartBody = await req.json();
  const productId = body.productId;

  carts[userID] = (carts[userID] || []).filter((pid) => pid !== productId);

  return new NextResponse(JSON.stringify(carts[userID]), {
    status: 202,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
