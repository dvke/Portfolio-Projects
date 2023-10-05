import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import { Link, animateScroll as scroll } from "react-scroll";

type Props = {};

const Navbar = (props: Props) => {
  const active = "text-primary-500";
  const flexBetween = "flex items-center justify-between";

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side */}
            <img src={Logo} alt="logo" />
            {/* right side */}
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
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
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <button>Become a Member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
