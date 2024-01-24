import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoSnapchat,
} from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto">
      {/* top */}
      <div className="border-t-[1px] w-[100%] py-3 flex items-center g justify-center">
        {/* social */}
        <div className="border-r-2 pr-10 flex gap-5 text-[1.45rem]">
          <i className="cursor-pointer hover:text-[#3c5a99]">
            <BiLogoFacebookCircle />
          </i>
          <i className="cursor-pointer hover:text-[#8433b7]">
            <BiLogoInstagramAlt />
          </i>
          <i className="cursor-pointer hover:text-[#ffd502]">
            <BiLogoSnapchat />
          </i>
        </div>
        {/* payment */}
        <div className="pl-10 w-[300px]">
          <img src="../public/img/payment.png" alt="payment-options" />
        </div>
      </div>
      {/* middle */}
      <div className="sm:flex-row  flex items-center flex-col gap-4 justify-around px-10 py-10 bg-[#f8f8f8] text-gray-500">
        {/* categories */}
        <div>
          <h3 className="text-center font-bold uppercase">Categories</h3>
          <ul className="text-sm flex  sm:flex-col gap-3">
            <Link to="/products/1">
              <li className="hover:text-blue-400">Women</li>
            </Link>
            <Link to="/products/2">
              <li className="hover:text-blue-400">Men</li>
            </Link>
            <Link to="/products/3 ">
              <li className="hover:text-blue-400">Accessories</li>
            </Link>
            <li className="hover:text-blue-400">New Arrivals</li>
          </ul>
        </div>
        {/* links */}
        <div>
          <h3 className="text-center font-bold uppercase">Links</h3>
          <ul className="text-sm flex sm:flex-col gap-3">
            <li className="hover:text-blue-400">FAQ</li>
            <li className="hover:text-blue-400">Pages</li>
            <li className="hover:text-blue-400">Stores</li>
            <li className="hover:text-blue-400">Cookies</li>
          </ul>
        </div>

        {/* contact */}
        <div>
          <h3 className="text-center font-bold uppercase">Contact</h3>
          <p className="text-sm">080 1234 56789</p>
        </div>
      </div>
      {/* bottom */}
      <div>
        <div className="text-sm text-center p-2 bg-[#dddddd]">
          {" "}
          &#169; APP4R3L by Uche Obiekwe 🤓
        </div>
      </div>
    </footer>
  );
};

export default Footer;
