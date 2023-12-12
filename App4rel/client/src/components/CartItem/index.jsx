import { CartContext } from "../../context/CartContext";
import React, { useContext } from "react";
import { BiTrash } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  // cart context
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(
    CartContext
  );
  // destructure item

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-300 font-light">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <div>
          <Link to={`/product/${item.id}`}>
            <img
              className="w-[100px] h-[100px] object-cover"
              src={
                // @ts-ignore
                import.meta.env.VITE_UPLOAD_URL +
                item?.attributes?.img?.data?.attributes?.url
              }
              alt="product-img"
            />
          </Link>
        </div>
        <div className="w-full flex flex-col">
          {/* title & trash icon */}
          <div className="flex text-xl justify-between mb-2">
            <Link
              to={`product/${item.id}`}
              className="uppercase text-sm font-medium hover:underline"
            >
              {item?.attributes?.title}
            </Link>
            {/* trash icon */}
            <div onClick={() => removeFromCart(item.id)}>
              <MdCancel className="text-gray-500 hover:text-red-500 cursor-pointer" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            {/* quantity */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border">
              <div
                onClick={() => decreaseAmount(item.id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer bg-[#f8f8f8]"
              >
                -
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {item.amount}
              </div>
              <div
                onClick={() => increaseAmount(item.id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer bg-[#f8f8f8]"
              >
                +
              </div>
            </div>
            {/* item price */}
            <div className="flex flex-1 items-center justify-around">
              $ {item.attributes.price}
            </div>
            {/* final price */}
            <div className="flex-1 flex justify-end items-center">{`$ ${item
              .attributes.price * item.amount}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
