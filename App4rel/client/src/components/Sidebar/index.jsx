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

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full h-full bg-white fixed z-50 top-0 shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 px-4 lg:px-[3]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase font-semibold">0 items in Cart</div>
        {/* icon */}
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex items-center justify-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
