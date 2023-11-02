import React, { useContext } from "react";
// import link
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
// import component
import CartItem from "../../components/CartItem";
// import sidebar context
import { SidebarContext } from "../../context/SidebarContext";
// import cart context
import { CartContext } from "../../context/CartContext";
import { BiTrash } from "react-icons/bi";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, total, clearCart } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      }  bg-white h-full w-full fixed z-50 top-0 shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase font-semibold">
          {cart.length} items in Cart
        </div>
        {/* icon */}
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex items-center justify-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      {/* car items */}
      <div className="flex flex-col gap-y-2 max-h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      {/* condition rendering: total price & clear cart */}
      {cart.length > 0 && (
        <div className="flex flex-col gap-y-3 py-4 mt-4">
          <div className="flex w-full justify-between items-center">
            {/* total */}
            <div className="uppercase font-bold">
              <span>Total: </span>$ {total}
            </div>
            {/* clear cart */}
            <div
              onClick={() => clearCart()}
              className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12  flex justify-center items-center text-xl"
            >
              <BiTrash />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
