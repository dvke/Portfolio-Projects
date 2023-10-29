import React, { useContext } from "react";
// import link
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
// import component
import CartItem from "components/CartItem";
// import sidebar context
import { SidebarContext } from "../../context/SidebarContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  return <div>Sidebar</div>;
};

export default Sidebar;
