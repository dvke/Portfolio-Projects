import { MdChevronLeft, MdChevronRight, MdLocalMovies } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

const SavedMovies = () => {
  const slider = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const { user } = useAuth();

  //Slider functions
  const slideRight = () => {
    slider.current.scrollLeft = slider.current.scrollLeft + 500;
  };

  const slideLeft = () => {
    slider.current.scrollLeft = slider.current.scrollLeft - 500;
  };

  const movieRef = doc(db, "users", `${user.email}`);

  const deleteMovie = async (id) => {
    try {
      const result = movies.filter((movie) => movie.id !== id);
      await updateDoc(movieRef, {
        savedMovies: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onSnapshot(movieRef, (doc) => {
      setMovies(doc.data()?.savedMovies.reverse());
    });
    setIsLoading(false);
  }, [user?.email]);

  return (
    <>
      <h2 className="text-gray-400 font-bold md:text-xl p-4">
        {user?.email?.split("@")[0]}'s Watchlist{" "}
        <MdLocalMovies size={30} className="inline-block" />
      </h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={30}
          className="bg-white absolute left-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          ref={slider}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {isLoading ? (
            <p className="text-white  text-3xl">loading...</p>
          ) : (
            movies.map((movie, id) => (
              <div
                key={movie.id}
                className="w-[170px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
              >
                <img
                  className="w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
                  alt={movie?.title}
                />
                <div className="absolute transition-all duration-300 ease-in-out top-0 left-0 h-full w-full hover:bg-black/60 opacity-0 hover:opacity-100 text-white">
                  <p className="white-space-norma text-xs flex font-bold justify-center items-center h-full text-center">
                    {movie?.title}
                  </p>
                  <p
                    onClick={() => deleteMovie(movie.id)}
                    className="absolute text-gray-300 top-4 right-4"
                  >
                    <AiOutlineClose />
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={30}
          className="bg-white absolute right-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
    </>
  );
};

export default SavedMovies;
