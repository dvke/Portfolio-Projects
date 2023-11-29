import { BiTrash } from "react-icons/bi";
import { CartContext } from "../../context/CartContext";
import React, { useContext, useEffect, useState } from "react";
import { BsCartX, BsTruck } from "react-icons/bs";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../makeRequest";

const Cart = () => {
  // const [cartList, setCartList] = useState([]);
  const {
    cart,
    removeFromCart,
    increaseAmount,
    decreaseAmount,
    total,
  } = useContext(CartContext);

  const stripePromise = loadStripe(
    "pk_test_51OHQ9UDB4caJs4xBKyco3nkoIMVhLe4LwTjH95eZRoKu6XNw92yJUpA3lAs1USDVFknlkS2k4B8dSJqDQPLehCsM00u9L0j8Kl"
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        cart,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.error(error.response.data);
      console.log(cart);
    }
  };
  return (
    <>
      {total === 0 ? (
        <div className="flex flex-col gap-5 items-center justify-center h-[100vh]">
          <BsCartX className="text-8xl text-gray-200" />
          <div className="uppercase">No items in cart</div>

          <Link
            to={"/"}
            className=" bg-black text-white flex p-4 justify-center items-center"
          >
            Back to Home
          </Link>
        </div>
      ) : (
        <div className="my-[150px] xl:px-40 px-10 flex md:flex-row flex-col md:gap-0 gap-10">
          {/* table */}
          <table className="md:w-[70%] max-h-[400px] overflow-y-auto">
            <thead>
              <tr className="border-b">
                <th className="font-bold uppercase">Product</th>
                <th className="font-bold uppercase">Price</th>
                <th className="font-bold uppercase">Quantity</th>
                <th className="font-bold uppercase">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="text-center">
                    <div className="flex items-center gap-3">
                      <i
                        className="text-2xl text-red-800 cursor-pointer"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <BiTrash />
                      </i>
                      {/* item image */}
                      <img
                        className="w-[100px] h-[150px] object-cover"
                        src={
                          // @ts-ignore
                          import.meta.env.VITE_UPLOAD_URL +
                          item.attributes.img.data.attributes.url
                        }
                        alt="item-image"
                      />
                      {/* item name */}
                      <div>{item.attributes.title}</div>
                    </div>
                  </td>
                  <td className="text-center text-[#797979]">
                    ${item.attributes.price}
                  </td>
                  <td className="text-center">{item.amount}</td>
                  <td className="text-center">
                    ${item.amount * item.attributes.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* cart total */}
          <div className="p-10 md:w-2/5 h-[400px] gap-5 flex flex-col ">
            {/* header */}
            <div className="uppercase font-bold">cart total</div>
            {/* sub total */}
            <div className="flex justify-between border-b">
              <h3 className="font-bold">Subtotal</h3>
              <div>${total}</div>
            </div>
            {/* shipping */}
            <div className="flex border items-center justify-center gap-5 text-black/60 p-10">
              <BsTruck className="text-xl" />
              <span className="text-sm">Free Delivery</span>
            </div>
            {/*total */}
            <div className="flex justify-between border-b">
              <h3 className="font-bold uppercase">Total</h3>
              <div>${total}</div>
            </div>
            {/* checkout */}
            <button
              onClick={handlePayment}
              className="w-full bg-black text-white flex p-4 justify-center items-center"
            >
              Proceed to Checkout
            </button>
            {/* continue shopping */}
            <Link
              to={"/"}
              className="w-full bg-[#dddddd] text-black flex p-4 justify-center items-center"
            >
              Continue shopping
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
