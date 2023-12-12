import { CartContext } from "../../context/CartContext";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

const Order = () => {
  const { search } = useLocation();
  const { clearCart } = useContext(CartContext);
  const queryParams = new URLSearchParams(search);
  const successParam = queryParams.get("success");

  console.log(successParam);

  return (
    <div className="w-full h-[100vh] flex flex-col gap-10 items-center justify-center">
      <h1 className="text-3xl mt-10">
        Your Order was {successParam === "true" ? " Successful" : "Cancelled"}
      </h1>

      <Link
        to={"/"}
        className=" bg-[#dddddd] text-black flex p-4 justify-center items-center"
        onClick={clearCart}
      >
        Continue shopping
      </Link>
    </div>
  );
};

export default Order;
