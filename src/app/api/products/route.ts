import { NextResponse } from "next/server";
import connectMangoDB from "@/app/utils/db";

export async function GET() {
  const { db } = await connectMangoDB();
  const products = await db.collection("products").find({}).toArray();
  const jsonResponse = JSON.stringify(products);
  return new NextResponse(jsonResponse, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
