import React, { useState } from "react";
import { Link } from "react-scroll";
// import logo from "../assets/LOGO PNG.png";
import { FaBars, FaTimes } from "react-icons/fa";


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
        <Link to="home" smooth="true" duration={500}>
          <li>Home</li>
        </Link>
        <Link to="about" smooth="true" duration={500}>
          <li>About Us</li>
        </Link>
        <Link to="services" smooth="true" duration={500}>
          <li className="flex items-center">Services</li>
        </Link>
        <Link to="products" smooth="true" duration={500}>
          <li>Products</li>
        </Link>
        <Link to="contact" smooth="true" duration={500}>
          <li>Conatct us</li>
        </Link>
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
