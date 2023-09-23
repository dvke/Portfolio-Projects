import React from "react";
import SavedMovies from "../components/SavedMovies";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className=" w-full  object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/bd6666ad-90f8-453d-ac3d-25092f05db36/NG-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />

        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px] lg:h-full"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Movies</h1>
        </div>
      </div>
      <div className="lg:absolute top-[50%] bg-black w-full py-10">
        <SavedMovies />
      </div>
    </>
  );
};

export default Account;
