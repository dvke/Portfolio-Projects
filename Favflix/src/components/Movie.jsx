import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { key } from "../Request";
import axios from "axios";
import { db } from "../firebase";
import { FaPlayCircle } from "react-icons/fa";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useIFrame } from "../context/IFrameContext";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const [trailerKey, setTrailerKey] = useState(null);
  const { user } = useAuth();
  const { showIFrame } = useIFrame();

  const movieID = doc(db, "users", `${user?.email}`);
  // save movie
  const saveMovie = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedMovies: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };

  useEffect(() => {
    const fetchTrailerLink = async () => {
      // Fetch the trailer key for the current movie
      const trailerResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${item.id}/videos`,
        {
          params: {
            api_key: key, // Replace with your TMDb API key
          },
        }
      );

      const trailers = trailerResponse.data.results;
      const firstTrailerKey = trailers.find((video) => video.type === "Trailer")
        ?.key;

      setTrailerKey(firstTrailerKey);
    };

    fetchTrailerLink();
  }, []);

  const handleShowTrailer = () => {
    showIFrame(trailerKey);
  };

  // const watchTrailerLink = trailerKey
  //   ? `https://www.youtube.com/watch?v=${trailerKey}`
  //   : "#"; // Provide a fallback link if no trailer is available
  return (
    <>
      <div className="w-[170px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
        <img
          className="w-full h-full block"
          src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
          alt={item?.title}
        />

        <div
          onClick={handleShowTrailer}
          className="absolute transition-all duration-300 ease-in-out top-0 left-0 h-full w-full hover:bg-black/60 opacity-0 hover:opacity-100 text-white"
        >
          <p className="white-space-normal text-[1rem] flex flex-col font-bold justify-center items-center h-full text-center break-words">
            {/* {item?.title.length < 25
              ? item?.title
              : item?.title.substring(0, 25) + "..."} */}
            Watch Trailer
            <FaPlayCircle className="text-4xl" />
          </p>
          <p className="border border-red-300" onClick={saveMovie}>
            {like ? (
              <FaHeart
                size={35}
                className="absolute z-10 top-4 left-4 text-gray-200"
              />
            ) : (
              <FaRegHeart
                size={35}
                className="absolute top-4 left-4 text-gray-200"
              />
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Movie;
