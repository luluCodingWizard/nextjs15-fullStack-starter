"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ButtonNavigateBack = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="mt-4 px-4 py-2  text-gray-500 rounded-lg hover:text-black"
    >
      Go Back
    </button>
  );
};

export default ButtonNavigateBack;
