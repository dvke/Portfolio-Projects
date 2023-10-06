import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {};

const Navbar = (props: Props) => {
  const active = "text-primary-500";
  const flexBetween = "flex items-center justify-between";
  const [menuToggled, setMenuToggled] = useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const menuItems = (
    <>
      <Link
        className="cursor-pointer duration-300 hover:text-primary-300"
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
        className="cursor-pointer duration-300 hover:text-primary-300"
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
        className="cursor-pointer duration-300 hover:text-primary-300"
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
        className="cursor-pointer duration-300 hover:text-primary-300"
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
      if (window.scrollY > 100) {
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
    <nav className={` ${isScrolled ? "bg-primary-100 drop-shadow" : ""}`}>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side */}
            <img src={Logo} alt="logo" />
            {/* right side */}
            {isDesktop ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  {menuItems}
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <button className="bg-secondary-500 px-5 py-2 group rounded-[10px] hover:bg-primary-500 duration-300">
                    <Link
                      className="group-hover:text-white"
                      activeClass={active}
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Become a Member
                    </Link>
                  </button>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={openMenu}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
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
