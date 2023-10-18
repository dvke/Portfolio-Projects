import React from "react";
import { IoIosArrowDown, IoIosSearch, IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {/* above nav */}
      <div className="flex justify-end items-center px-10 gap-10 text-sm h-[30px] bg-[#f8f8f8] ">
        <div className="flex h-full items-center  border-l-2 pl-4">
          <a className="" href="">
            Help & FAQS
          </a>
        </div>
        <div className="border-l-2 pl-4 h-full flex items-center">
          <a href="">
            <img
              className="w-5 hover:scale-125 duration-200"
              src="../public/img/flag_ng.png"
              alt="ng-flag"
            />
          </a>
        </div>
      </div>
      {/* main nav */}
      <div className="grid grid-cols-3 w-full items-center  px-20 py-3 border">
        {/* logo */}
        <div>
          <a href="/" className="font-[700] text-[1.75rem] tracking-widest">
            APP4R3L
            {/* <img
              className="w-[170px] rounded-lg"
              src="./public/img/logo.png"
              alt=""
            /> */}
          </a>
        </div>
        {/* links */}
        <div className="flex justify-self-center gap-10">
          <Link to="/products/1" className="nav uppercase ">
            MEN
          </Link>
          <Link to="/products/2" className="nav uppercase">
            WOMEN
          </Link>
          <Link to="/" className="nav uppercase">
            ACCESSORIES
          </Link>
        </div>
        {/* icons & search */}
        {/* search */}
        <div className="justify-self-end relative gap-5 flex items-center">
          <input
            type="text"
            placeholder="Search for a Product"
            className="bg-[#f8f8f8] px-8 py-2 peer rounded-md xl:block hidden"
          />
          <i className="xl:absolute left-2 peer-focus:text-black xl:text-gray-400 text-xl">
            <IoIosSearch />
          </i>
          {/* icons */}
          <div className="flex ml-0 gap-4 text-gray-500  text-[1.5rem]">
            <i className="cursor-pointer hover:text-black duration-200">
              <BiUser />
            </i>
            <i className="cursor-pointer hover:text-black duration-200">
              <IoMdHeartEmpty />
            </i>
            <div className="relative">
              <i className="cursor-pointer hover:text-black duration-200">
                <IoCartOutline />
              </i>
              <span className="absolute -top-2 -right-1 flex items-center justify-center  rounded-full bg-blue-500 text-xs text-white w-4 h-4">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
