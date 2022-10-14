import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/Affaan.png";
import { Link } from "react-scroll";
import Photography from "./Photography";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center bg-[#0a192f] text-gray-300">
      <div>
      <Link to="home" smooth={true} duration={500}>
        <img src={Logo} alt="Logo Image" style={{ width: "120px" }} />
        </Link>
      </div>
      {/* //menu */}
      <div>
        <ul className="hidden md:flex">
          <li className="text-white font-bold group px-6 py-4 my-2 flex items-center hover:bg-blue-700">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="text-white font-bold group px-6 py-4 my-2 flex items-center hover:bg-blue-700">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="text-white font-bold group px-6 py-4 my-2 flex items-center hover:bg-blue-700">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="text-white font-bold group px-6 py-4 my-2 flex items-center hover:bg-blue-700">
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="text-white font-bold group px-6 py-4 my-2 flex items-center hover:bg-blue-700">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* //hamnurger */}

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobileview */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-sreen bg-[#0a193f] flex flex-col jusitfy-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Photography Page! */}

      <div className="hidden lg:flex fixed flex-col top-[36%] right-0">
        <Photography />
      </div>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/affaankidwai/"
              target="_blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#111827]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.github.com/affaankidwai"
              target="_blank"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#e7254f]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
              target="_blank"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://twitter.com/AffaanKidwai"
              target="_blank"
            >
              Twitter <FaTwitter size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
