"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ButtonNavigateBack = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
    >
      Back to Cart
    </button>
  );
};

export default ButtonNavigateBack;
