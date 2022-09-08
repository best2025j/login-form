import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
         // OPEN MENU
  const handClick = () => setNav(!nav);
        // CLOSE MENU
  const handleClose = () => setNav(!nav);

  return (

                               // NAV BRAND

    <div className="w-full h-[60px] z-10 bg-zinc-200 fixed drop-shadow-xl">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold font-serif mr-4 sm:text-4xl">
            BRAND.
          </h1>

                              {/* LIST ITEMS */}

          <ul className="hidden md:flex cursor-pointer">
            <li className="active:text-green-700">
              <Link to="Home" smooth={true} durations={540}>
                Home
              </Link>
            </li>
            <li className="active:text-blue-700">
              <Link to="About" smooth={true} effect={-50} durations={540}>
                About
              </Link>
            </li>
            <li className="active:text-green-700">
              <Link to="Support" smooth={true} effect={-150} durations={540}>
                Support
              </Link>
            </li>
            <li className="active:text-green-700">
              <Link to="Platform" smooth={true} effect={-100} durations={540}>
                Platforms
              </Link>
            </li>
            <li className="active:text-green-700">
              <Link to="Pricing" smooth={true} effect={-50} durations={540}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>

                                   {/* FORM BUTTON*/}

        <div className="hidden md:flex pr-4">
          <button className="active:text-white active:bg-[#264ac4] px-5 border-none bg-transparent text-black mr-4">
            Sign-In
          </button>
          <button className="px-4 active:text-white active:bg-[#264ac4] py-2">
            Sign-Up
          </button>
        </div>

        {/* MENU */}

        <div className="md:hidden cursor-pointer" onClick={handClick}>
          {nav === false ? (
            <MenuIcon className="w-8 animate-bounce" />
          ) : (
            <XIcon className="w-8" />
          )}
        </div>
      </div>

                                 {/* ITEMS ON SMALL SCREEN */}
      
      <ul
        className={
          nav === false
            ? "hidden"
            : "absolute bg-gray-200 h-screen w-full xl:hidden px-8"
        }
      >
        <li className="border-b cursor-pointer border-zinc-400 w-full">
          <Link onClick={handleClose} to="Home" smooth={true} durations={540}>
            Home
          </Link>
        </li>
        <li className="border-b border-zinc-400 w-full">
          <Link
            onClick={handleClose}
            to="About"
            smooth={true}
            effect={-200}
            durations={540}
          >
            About
          </Link>
        </li>
        <li className="border-b border-zinc-400 w-full">
          <Link
            onClick={handleClose}
            to="Support"
            smooth={true}
            effect={-150}
            durations={540}
          >
            Support
          </Link>
        </li>
        <li className="border-b border-zinc-400 w-full">
          <Link
            onClick={handleClose}
            to="Platform"
            smooth={true}
            effect={-100}
            durations={540}
          >
            Platforms
          </Link>
        </li>
        <li className="border-b border-zinc-400 w-full">
          <Link
            onClick={handleClose}
            to="Pricing"
            smooth={true}
            effect={-50}
            durations={540}
          >
            Pricing
          </Link>
        </li>

        <div className="flex flex-col my-4 ">
          {/* BUTTON */}
          <button className="px-8 mb-2 active:bg-[#264ac4] active:text-white py-3 bg-transparent text-indigo-500">
            Sign Up
          </button>
          <button className="px-8 active:bg-[#264ac4] active:text-white py-3">Sign In</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
