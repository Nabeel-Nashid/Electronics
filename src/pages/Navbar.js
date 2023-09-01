import React, { useState } from "react";
import { Link } from "react-scroll";
// import logo from "../assets/LOGO PNG.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";


function Navbar() {
  const [bar, setBar] = useState(false);
  const handleClick = () => {
    setBar(!bar);
  };
  return (
    <div className=" flex justify-around md:max-w-[full] w-full  h-[90px] mx-auto bg-gradient-to-r from-teal-500 to-green-500">
      <div className="flex justify-center items-center">
        {/* <img src={logo} className="w-32" /> */}
        <h1 className="text-black">logo</h1>
      </div>
      {/* <div className="flex justify-center items-center"> */}
      <ul className="hidden md:flex flex-row font-header justify-center items-center">
        <BiMenu className="mr-5"/>
        <form>
          <label
            for="search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-3 h-3 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              class="block w-36 p-4 pl-10 h-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
            
          </div>
        </form>
        
        <Link to="home" smooth="true" duration={500}>
          <li>Home</li>
        </Link>
        {/* <Link to="about" smooth="true" duration={500}>
          <li>About Us</li>
        </Link> */}
        <Link to="services" smooth="true" duration={500}>
          <li className="flex items-center">Services</li>
        </Link>
        <Link to="products" smooth="true" duration={500}>
          <li>Products</li>
        </Link>
        <Link to="contact" smooth="true" duration={500}>
          <li>Conatct us</li>
        </Link>
        <FiHeart className="mx-5"/>
        <BsHandbag/>
      </ul>

      <div
        onClick={handleClick}
        className="md:hidden z-10 cursor-pointer flex justify-center items-center"
      >
        {!bar ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !bar
            ? "hidden"
            : "absolute top-0 left-0 w-[300px] h-[400px] bg-[white] flex flex-col justify-center items-center"
        }
      >
        <li
          className="py-6 text-4x
        "
        >
          Home
        </li>
        <li
          className="py-6 text-4x
        "
        >
          About
        </li>
        <li
          className="py-6 text-4x
        "
        >
          Skill
        </li>
        <li
          className="py-6 text-4x
        "
        >
          Work
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
