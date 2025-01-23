import { NextResponse } from "next/server";
import { productsData } from "@/app/data";

export async function GET() {
  const jsonResponse = JSON.stringify(productsData);
  return new NextResponse(jsonResponse, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
