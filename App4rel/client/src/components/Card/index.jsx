import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Card = ({ item }) => {
  return (
    <Link className="md:min-w-[280px] min-w-[400px]" to={`/product/${item.id}`}>
      {/* card */}
      <div className="relative">
        {/* heart icon */}
        <div className="drop-shadow-lg absolute z-[3] top-2 right-2 flex items-center justify-center rounded-full bg-white w-8 h-8">
          <i className="text-xl text-gray-500 ">
            <AiOutlineHeart />
          </i>
        </div>
        {/* image */}
        <div className="w-full h-[400px] relative overflow-hidden">
          {/* New tag */}
          {item.isNew && (
            <span className="uppercase py-1 px-2 absolute left-2 bottom-2 rounded-sm font-[900] text-center text-sm z-10 bg-white/70">
              NEW
            </span>
          )}
          <img
            className="w-full h-full object-cover absolute hover:scale-110 duration-300 ease-in-out"
            src={item.img}
            alt="main-img"
          />
          {/* <div className={`absolute z-30 w-full h-full bg-[url($)]`}></div> */}
          <img
            className="w-full hover:scale-150 duration-300 ease-in-out h-full object-cover absolute md:hidden"
            src={item.img2}
            alt="2nd-img"
          />
        </div>
        {/* title */}
        <h2 className="mt-5">{item.title}</h2>
        {/* price */}
        <div className="flex items-center gap-5">
          <h3>${item.newPrice}</h3>
          <h3 className="text-gray-400 text-sm line-through">
            ${item.oldPrice}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
