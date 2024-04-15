import React from "react";
import NavbarItem from "./NavbarItem";
import { Suspense } from "react";
const Navbar = () => {
  return (
    <div className="flex dark:text-black  bg-[#F5C518] p-4 lg:text-lg gap-6 mx-auto justify-center items-center">
      <Suspense>
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
        <NavbarItem title="Popular" param="fetchPopular" />
        <NavbarItem title="Upcoming" param="fetchUpcoming" />
      </Suspense>
    </div>
  );
};

export default Navbar;
