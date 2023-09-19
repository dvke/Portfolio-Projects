import axios from "axios";
import { useState, useEffect } from "react";
import requests from "../Request";
import MainButton from "./MainButton";

const Main = () => {
  const [movies, setMovies] = useState([]);

  //get random movie from movies[]
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    //api request
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  // console.log(movie);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className=" flex gap-4 my-4">
            <MainButton text="Play" color="red" px={10} textColor="white" />
            <MainButton
              text="Watch later"
              color="amber"
              textColor="white"
              px={7}
            />
          </div>
          <p className="text-gray-400 text-sm">
            Released : {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
