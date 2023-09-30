import React from "react";

function MovieModal({ movieName, movieOverview }) {
  return (
    <div className="fixed w-[100vw] h-[100vh] inset-0 bg-white">
      <div className="absolute  text-center border border-red-600">
        <h1>{movieName}</h1>
        <p>{movieOverview}</p>
      </div>
    </div>
  );
}

export default MovieModal;
