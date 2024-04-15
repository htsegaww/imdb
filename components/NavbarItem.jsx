"use client";
import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
const NavbarItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <Suspense>
      <Link
        className={` hover:text-white font-semibold ${
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-[#f5c518] rounded-lg"
            : ""
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </Suspense>
  );
};

export default NavbarItem;
