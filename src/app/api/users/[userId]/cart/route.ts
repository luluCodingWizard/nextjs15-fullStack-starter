import { NextResponse, NextRequest } from "next/server";
import { productsData } from "@/app/data";

type IShoppingCart = Record<string, string[]>;
const carts: IShoppingCart = {
  "1": ["111"],
  "2": ["222", "333"],
};

export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const userID = await params.userId;

  const productIds = carts[userID];

  if (!productIds) {
    return new NextResponse(JSON.stringify([]), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const cartProducts = productIds.map((id) =>
    productsData.find((product) => product.id === id)
  );

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
  const id = await params.userId;
  const body: ICartBody = await req.json(); // Parse the request body
  const { productId } = body; // extract the product id from the request body

  if (!carts[id]) {
    carts[id] = [];
  }

  carts[id].push(productId);

  const updatedCart = carts[id].map((ID) => ({ productId: ID, quantity: 1 }));

  return new NextResponse(JSON.stringify(updatedCart), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
