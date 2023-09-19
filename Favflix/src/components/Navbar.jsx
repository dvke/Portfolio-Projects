import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 w-full z-[100] absolute">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
        FAVFLIX
      </h1>
      <div>
        <button className="text-white pr-4">Sign In</button>
        <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
