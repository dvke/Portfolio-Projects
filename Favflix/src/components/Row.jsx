import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const slider = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchURL);
        setMovies(response.data.results);
        setIsLoading(false);
      } catch (error) {
        setError("Error fetching data. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchData();
  }, [fetchURL]);

  const slideRight = () => {
    slider.current.scrollLeft = slider.current.scrollLeft + 500;
  };

  const slideLeft = () => {
    slider.current.scrollLeft = slider.current.scrollLeft - 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4 border-l-4 border-purple-600 ml-4">
        {title}
      </h2>
      <div className="relative flex items-center group mb-10">
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
            <p className="text-white text-sm">Loading...</p>
          ) : error ? (
            <p className="text-white text-sm">{error}</p>
          ) : (
            movies.map((movie, id) => <Movie key={id} item={movie} />)
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

export default Row;
