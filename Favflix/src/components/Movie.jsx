import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);

  return (
    <>
      <div className="w-[170px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
        <img
          className="w-full h-auto block"
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}
        />
        <div className="absolute transition-all duration-300 ease-in-out top-0 left-0 h-full w-full hover:bg-black/60 opacity-0 hover:opacity-100 text-white">
          <p className="white-space-norma text-xs flex font-bold justify-center items-center h-full text-center">
            {item?.title}
          </p>
          <p>
            {like ? (
              <FaHeart className="absolute top-4 left-4 text-gray-200" />
            ) : (
              <FaRegHeart className="absolute top-4 left-4 text-gray-200" />
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Movie;
