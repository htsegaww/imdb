"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};
const Card = ({ result }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      className=" group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 "
    >
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 w-full "
          alt={result.title || result.name}
        />
        <div className="p-2">
          <p className="line-clamp-2 text-sm">{result.overview}</p>
          <h2 className="text-lg font-bold truncate text-[#F5C518]">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">
            <span className="text-[#F5C518] mr-2">Release Date:</span>
            {result.release_date || result.first_air_date}
          </p>
          <p>
            <span className="text-[#F5C518] mr-2">Rating:</span>
            {result.vote_average.toFixed(1)}⭐
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;
