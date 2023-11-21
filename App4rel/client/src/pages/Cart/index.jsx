import { BiTrash } from "react-icons/bi";
import { CartContext } from "../../context/CartContext";
import React, { useContext, useEffect, useState } from "react";

const Cart = () => {
  // const [cartList, setCartList] = useState([]);
  const {
    cart,
    removeFromCart,
    increaseAmount,
    decreaseAmount,
    total,
  } = useContext(CartContext);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
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
          {cart.map((item) => (
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
      <div className="p-40 h-[400px] flex items-center justify-center border-2">
        total
      </div>
    </div>
  );
};

export default Cart;
