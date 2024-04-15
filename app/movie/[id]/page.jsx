import Image from "next/image";

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();
  // console.log(movie.genres);

  return (
    <div className="w-full ">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          alt=""
          className="rounded-lg"
          style={{ maxWidth: "100%", height: "100%" }}
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold text-[#F5C518]">
            {movie.title || movie.name}
          </h2>
          <h2 className="text-lg font-semibold text-[#F5C518]">Overview</h2>
          <p className="text-sm mb-3">{movie.overview}</p>
          <p className="mb-3">
            <span className="font-semibold mr-1 text-[#F5C518]">
              Date Released:
            </span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p>
            <span className="text-[#F5C518]">runtime: </span>

            {movie.runtime}
          </p>
          <p>
            <span className="text-[#F5C518]">language: </span>
            {movie.original_language}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1 text-[#F5C518]">Rating:</span>
            {Math.round(movie.vote_average) || movie.vote_count} ⭐
          </p>
          <div>
            {movie.genres?.map((genre) => {
              return (
                <div
                  key={genre.id}
                  className="inline-block mr-2 md:mr-10 bg-[#F5C518] px-2 rounded-md text-black"
                >
                  <p className="m-0">{genre.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
