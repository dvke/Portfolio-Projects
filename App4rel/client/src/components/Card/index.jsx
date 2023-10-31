import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlinePlus,
  AiFillEye,
} from "react-icons/ai";

// cart context
import { CartContext } from "../../context/CartContext";

const Card = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="md:min-w-[280px] min-w-[350px] relative group overflow-hidden">
      {/* card */}
      <Link to={`/product/${product.id}`}>
        {/* heart icon */}
        {/* <div className="drop-shadow-lg absolute z-[3] top-2 right-2 flex items-center justify-center rounded-full bg-white w-8 h-8">
          <i className="text-xl text-gray-500 ">
            <AiOutlineHeart />
          </i>
        </div> */}
        {/* image */}
        <div className="w-full h-[400px] relative overflow-hidden">
          {/* New tag */}
          {product.isNew && (
            <span className="uppercase py-1 px-2 absolute left-2 bottom-2 rounded-sm font-[900] text-center text-sm z-10 bg-white/70">
              NEW
            </span>
          )}
          <img
            className="w-full h-full object-cover absolute hover:scale-110 duration-300 ease-in-out"
            src={product.img}
            alt="main-img"
          />
          {/* <div className={`absolute z-30 w-full h-full bg-[url($)]`}></div> */}
          <img
            className="w-full hover:scale-150 duration-300 ease-in-out h-full object-cover absolute md:hidden"
            src={product.img2}
            alt="2nd-img"
          />
        </div>
        {/* title */}
        <h2 className="mt-5">{product.title}</h2>
        {/* price */}
        <div className="flex items-center gap-5">
          <h3>${product.newPrice}</h3>
          <h3 className="text-gray-400 text-sm line-through">
            ${product.oldPrice}
          </h3>
        </div>
      </Link>
      {/* buttons */}
      <div className="absolute top-0 -right-20 group-hover:right-0 p-2 flex flex-col gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
        <button onClick={() => addToCart(product, product.id)}>
          <i className="w-12 h-12 flex justify-center items-center bg-blue-500 hover:bg-blue-700 duration-200 text-white">
            <AiOutlinePlus />
          </i>
        </button>
        <Link to={"/"}>
          <i className="w-12 h-12 flex items-center justify-center bg-white/80 drop-shadow-3xl">
            <AiFillEye />
          </i>
        </Link>
      </div>
    </div>
  );
};

export default Card;
