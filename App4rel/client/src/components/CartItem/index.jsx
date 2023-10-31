import { CartContext } from "../../context/CartContext";
import React, { useContext } from "react";
import { BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  // cart context
  const { removeFromCart } = useContext(CartContext);
  // destructure item
  const { id, title, img, newPrice, amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-300 font-light">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <div>
          <Link to={`/product/${id}`}>
            <img className="max-w-[80px]" src={img} alt="product-img" />
          </Link>
        </div>
        <div className="w-full flex flex-col">
          {/* title & trash icon */}
          <div className="flex text-xl justify-between mb-2">
            <Link
              to={`prodcut/${id}`}
              className="uppercase text-sm font-medium hover:underline"
            >
              {title}
            </Link>
            {/* trash icon */}
            <div onClick={() => removeFromCart(id)}>
              <BiTrash className="text-gray-500 hover:text-red-500 cursor-pointer" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            {/* quantity */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border">
              <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                -
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                +
              </div>
            </div>
            {/* item price */}
            <div className="flex flex-1 items-center justify-around">
              $ {newPrice}
            </div>
            {/* final price */}
            <div className="flex-1 flex justify-end items-center">{`$ ${newPrice *
              amount}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
