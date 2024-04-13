"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useState } from "react";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <form
      className="flex justify-between px-5 max-w-6xl mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search..."
        className="w-full h-14 rounded-md placeholder-gray=500 outline-none bg-transparent flex-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button className=" disabled:text-gray-400" disabled={search === ""}>
        Search
      </Button>
    </form>
  );
};

export default SearchBox;
