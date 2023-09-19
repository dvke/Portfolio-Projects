import axios from "axios";
import { useState, useEffect } from "react";
import Movie from "./Movie";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
      setisLoading(false);
    });
  }, [fetchURL]);

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div id={"slider"}>
          {isLoading ? (
            <p className="text-white text-sm">loading...</p>
          ) : (
            movies.map((movie, id) => <Movie key={id} item={movie} />)
          )}
        </div>
      </div>
    </>
  );
};

export default Row;
