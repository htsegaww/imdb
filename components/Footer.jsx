import React from "react";

const Footer = () => {
  return (
    <footer className="md:flex md:items-center md:justify-center text-center mt-20 text-xs text-slate-400 ">
      <p className="flex items-center justify-center">
        <span className="">ⓒHenok /</span>
        <span className="ml-1">
          <span>All rights reserved</span>
          <span className="mr-1"> {new Date().getFullYear()}</span>
        </span>
      </p>
      Made by using TMDB API
    </footer>
  );
};

export default Footer;
