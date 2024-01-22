import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { BiSolidUserCircle } from "react-icons/bi";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = `flex items-center justify-between p-4 w-full z-[100]  ${
    isScrolled
      ? "bg-black bg-opacity-80 transition-background ease-out duration-300"
      : ""
  } fixed`;

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className={navbarClass}>
      <Link to="/">
        <h1 className="text-purple-500 text-[2rem] font-bold cursor-pointer">
          FAV<span className="text-[1.75rem]">🎬</span>FLIX
        </h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white pr-4">
              <BiSolidUserCircle
                size={50}
                className="inline-block text-gray-200 border-l-2 border-gray-400 pl-2"
              />
            </button>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-purple-500 px-6 py-2 rounded cursor-pointer text-white"
          >
            Log out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-purple-500 px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
