"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <form
      className="flex justify-between px-5 max-w-6xl mx-auto mt-5  "
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        placeholder="Search..."
        className="w-full placeholder-gray-500 outline-none bg-transparent border-[#F5C518] "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button
        className=" disabled:text-gray-900 max-w-[135px] px-10 bg-[#F5C518] text-black "
        disabled={search === ""}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBox;
