import React, { useState } from "react";
import Logo from "@/assets/Logo.png";
import {
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineUser,
  AiOutlineHeart,
} from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex bg-white font-bold text-sm px-10 justify-between md:justify-around items-center">
      {/* Hamburger Menu Button */}
      <div className="text-2xl cursor-pointer md:hidden" onClick={toggleMenu}>
        &#9776;
      </div>
      <Link to={"/"}>
        <img className="w-[200px] " src={Logo} alt="Logo" />
      </Link>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="text-xl fixed top-0 left-0 h-full w-full bg-black/50 z-10">
          <div className=" flex flex-col gap-10 items-center h-full px-10 py-7 w-1/3 bg-primary absolute left-0 top-0">
            <div
              className="text-white cursor-pointer mb-5"
              onClick={toggleMenu}
            >
              <i className="absolute right-10 text-secondary">
                <AiOutlineClose />
              </i>
            </div>
            <Link to={"/"}>
              <p className="text-secondary hover:text-slate-400 mb-3">Home</p>
            </Link>
            <Link to={"/shop"}>
              <p className="text-secondary hover:text-slate-400 mb-3">Shop</p>
            </Link>
            <p className="text-secondary hover:text-slate-400 mb-3">Pages</p>
            <Link to={"/contact"}>
              <p className="text-secondary hover:text-slate-400 mb-3">
                Contact
              </p>
            </Link>
          </div>
        </div>
      )}
      {/* Desktop Menu */}
      <div className="tracking-tight hidden md:flex gap-10 justify-between uppercase">
        <p className="px-5 py-3 hover:bg-slate-400 rounded-lg hover:text-white duration-200">
          Home
        </p>
        <p className="px-5 py-3 hover:bg-slate-400 rounded-lg hover:text-white duration-200">
          Shop
        </p>
        <p className="flex group items-center px-5 py-3 hover:bg-slate-400 rounded-lg hover:text-white duration-200">
          Pages
          <i className="text-sm ml-1 group-hover:rotate-180 duration-100">
            <IoIosArrowUp />
          </i>
        </p>
        <Link to="/contact">
          <p className="px-5 py-3 hover:bg-slate-400 rounded-lg hover:text-white duration-200">
            Contact
          </p>
        </Link>
      </div>
      {/* Icons */}
      <div className="flex gap-5 justify-between">
        <a href="#">
          <i className="text-[1.5rem] hover:text-slate-400 duration-200">
            <AiOutlineSearch />
          </i>
        </a>
        <a href="#">
          <i className="text-[1.5rem] hover:text-slate-400 duration-200">
            <AiOutlineUser />
          </i>
        </a>
        <a className="relative" href="#">
          <div className="absolute left-4 bottom-3 bg-secondary rounded-full w-4 h-4 text-xs flex items-center justify-center text-white font-bold">
            0
          </div>
          <i className="text-[1.5rem] hover:text-slate-400 duration-200">
            <AiOutlineHeart />
          </i>
        </a>
        <a className="relative" href="#">
          <div className="absolute left-4 bottom-3 bg-secondary rounded-full w-4 h-4 text-xs flex items-center justify-center text-white font-bold">
            0
          </div>
          <i className="text-[1.5rem] hover:text-slate-400 duration-200">
            <BiShoppingBag />
          </i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
