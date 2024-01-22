import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {};

const Navbar = (props: Props) => {
  const active = "text-secondary-500 underline decoration-4 underline-offset-8";
  const flexBetween = "flex items-center justify-between";
  const [menuToggled, setMenuToggled] = useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width: 1000px)");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const menuItems = (
    <>
      <Link
        className=" cursor-pointer duration-300 hover:text-white"
        activeClass={active}
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Home
      </Link>
      <Link
        className=" cursor-pointer duration-300 hover:text-white"
        activeClass={active}
        to="benefits"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Benefits
      </Link>
      <Link
        className=" cursor-pointer duration-300 hover:text-white"
        activeClass={active}
        to="ourclasses"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Our Classes
      </Link>
      <Link
        className=" cursor-pointer duration-300 hover:text-white"
        activeClass={active}
        to="contactus"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Contact Us
      </Link>
    </>
  );

  const openMenu = () => {
    setMenuToggled(true);
  };
  const closeMenu = () => {
    setMenuToggled(false);
  };

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Check if the user has scrolled down a bit (e.g., 100 pixels)
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="">
      <div
        className={`${flexBetween} fixed top-0 z-[15] w-full py-6 ${
          isScrolled ? "bg-gray-20 shadow-sm shadow-white" : ""
        }`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side */}
            <h1 className="text-2xl uppercase font-bold w-[300px] text-secondary-500 font-montserrat">
              Duke's Gym
            </h1>
            {/* right side */}
            {isDesktop ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  {menuItems}
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p className="cursor-pointer hover:text-white">Sign In</p>
                  <ActionButton text="Become a Member" />
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2 group hover:bg-[#7F00FF]"
                onClick={openMenu}
              >
                <Bars3Icon className="h-6 w-6 text-black group-hover:text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {menuToggled && !isDesktop && (
        <div className="fixed right-0 top-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* close icon */}
          <div className="flex justify-end p-10">
            <button onClick={closeMenu}>
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>
          {/* menu items */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            {menuItems}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
