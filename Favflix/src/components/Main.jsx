import React, { useState, useEffect } from "react";
import axios from "axios";
import requests, { key } from "../Request";
import MainButton from "./MainButton";
import { useIFrame } from "../context/IFrameContext";

const Main = () => {
  const [movie, setMovie] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);
  const [trailerKey, setTrailerKey] = useState(null);
  const { showIFrame } = useIFrame();

  useEffect(() => {
    const fetchRandomMovie = async () => {
      try {
        const response = await axios.get(requests.requestPopular);
        const movies = response.data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];

        // Fetch the trailer key for the current movie
        const trailerResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${randomMovie.id}/videos`,
          {
            params: {
              api_key: key, // Replace with your TMDb API key
            },
          }
        );

        const trailers = trailerResponse.data.results;
        const firstTrailerKey = trailers.find(
          (video) => video.type === "Trailer"
        )?.key;

        setTrailerKey(firstTrailerKey);

        // Trigger the fade-in animation
        setFadeIn(false);
        setTimeout(() => {
          setMovie(randomMovie);
          setFadeIn(true);
        }, 1000); // Adjust the timeout to match the animation duration
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    // Fetch a random movie initially
    fetchRandomMovie();

    // Set up interval to fetch a new random movie every 8 seconds
    const intervalId = setInterval(() => {
      fetchRandomMovie();
    }, 10000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const handleShowTrailer = () => {
    showIFrame(trailerKey);
  };

  // const watchTrailerLink = trailerKey
  //   ? `https://www.youtube.com/watch?v=${trailerKey}`
  //   : "#"; // Provide a fallback link if no trailer is available

  return (
    <div
      className={`w-full h-[550px] text-white transition-opacity duration-1000 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
      <img
        className="w-full h-full object-cover"
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <div className="absolute w-full top-[20%] p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
        <div className="my-4">
          {/* <a href={watchTrailerLink} target="_blank" rel="noopener noreferrer"> */}
          <button
            onClick={handleShowTrailer}
            className="border text-white border-gray-300 py-2 px-5 ml-4"
          >
            Watch Trailer
          </button>
          {/* </a> */}
        </div>
        <p className="text-gray-400 text-sm">Released: {movie?.release_date}</p>
        <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
          {truncateString(movie?.overview, 150)}
        </p>
      </div>
    </div>
  );
};

export default Main;
