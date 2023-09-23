import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";
import MovieModal from "./MovieModal";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { user } = useAuth();

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

  const ShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="w-[170px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
        <img
          className="w-full h-full block"
          src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
          alt={item?.title}
        />
        <div className="absolute transition-all duration-300 ease-in-out top-0 left-0 h-full w-full hover:bg-black/60 opacity-0 hover:opacity-100 text-white">
          <p
            className="white-space-normal text-[1rem] flex font-bold justify-center items-center h-full text-center break-words"
            onClick={() => ShowModal()}
          >
            {item?.title.length < 17
              ? item?.title
              : item?.title.substring(0, 17) + "..."}
          </p>
          <p className="border border-red-300" onClick={saveMovie}>
            {like ? (
              <FaHeart
                size={25}
                className="absolute top-4 left-4 text-gray-200"
              />
            ) : (
              <FaRegHeart
                size={25}
                className="absolute top-4 left-4 text-gray-200"
              />
            )}
          </p>
        </div>
      </div>
      {showModal && <MovieModal />}
    </>
  );
};

export default Movie;
