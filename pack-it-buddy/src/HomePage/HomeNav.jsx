import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PackitByddyLogo from '../assets/OurLogo.png';

const HomeNav = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);

  return (
<nav className="flex justify-between items-center w-full h-20 px-4 text-white bg-white shadow-lg">
  <div>
    <Link to="/">
      <img
        src={PackitByddyLogo}
        alt="Our Logo"
        className="object-contain h-48 w-32 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] text-3xl mb-10"
      />
    </Link>
  </div>

  <ul className="hidden md:flex">
    <li>
      <Link
        className="px-2 font-bold cursor-pointer capitalize text-gray-800 hover:scale-105 duration-200"
        to="/SignUpFormDriver"
      >
        Become a driver
      </Link>
    </li>
    <li className="relative group">
      <Link
        className="px-4 cursor-pointer capitalize font-bold text-gray-800 hover:scale-105 duration-200"
        to="/"
      >
        Services
      </Link>
      <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-700 opacity-0 group-hover:opacity-100 group-hover:block hidden transition-opacity duration-200">
        <li className="px-4 py-2 hover:bg-gray-200 shadow-sm">Local Moving</li>
        <li className="px-4 py-2 hover:bg-gray-200 shadow-sm">International Moving</li>
        <li className="px-4 py-2 hover:bg-gray-200 shadow-sm">Packing Services</li>
      </ul>
    </li>

    <li className="relative group">
      <Link
        className="px-4 cursor-pointer capitalize font-bold text-gray-800 hover:scale-105 duration-200"
        to="/"
      >
        About
      </Link>
      <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-700 opacity-0 group-hover:opacity-100 group-hover:block hidden transition-opacity duration-200">
        <li className="px-4 py-2 hover:bg-gray-200 shadow-sm">Our Story</li>
        <li className="px-4 py-2 hover:bg-gray-200 shadow-sm">Team</li>
      </ul>
    </li>

    <li className="relative group">
      <Link
        className="px-4 cursor-pointer capitalize font-bold text-gray-800 hover:scale-105 duration-200"
        to="/"
      >
        Contact
      </Link>
      <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-700 opacity-0 group-hover:opacity-100 group-hover:block hidden transition-opacity duration-200">
        <li className="px-4 py-2 hover:bg-gray-200 shadow-sm">Location</li>
        <li className="px-4 py-2 hover:bg-gray-200 shadow-sm">Support</li>
      </ul>
    </li>

    <label className="nav-item text-white">
      <Link className='bg-[#131a4b] font-bold px-4 rounded-md py-2' to='/SignUpFormClient'>
        Sign In
      </Link>
    </label>
  </ul>

  {/* Hamburger Menu Icon */}
  <div
    onClick={toggleNav}
    className="cursor-pointer pr-4 z-20 text-gray-500 md:hidden"
    aria-label="Toggle navigation menu"
  >
    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
  </div>

  {/* Mobile Menu */}
  <div
    className={`fixed top-2 left-0 w-full h-fit bg-white text-gray-500 z-50 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
      nav ? "left-0" : "-left-full"
    }`}
  >
    <div
      onClick={toggleNav}
      className="absolute top-4 right-4 cursor-pointer text-gray-500"
      aria-label="Close navigation menu"
    >
      <FaTimes size={30} />
    </div>

    <ul className="flex flex-col items-center gap-6">
      <li className="text-2xl font-bold py-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] hover:text-[#131a4b] hover:underline">
        <Link onClick={toggleNav} to="/SignUpFormDriver">Become a driver</Link>
      </li>
      <li className="text-2xl font-bold py-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] hover:text-[#131a4b] hover:underline">
        <Link onClick={toggleNav} to="/Reviews">Services</Link>
      </li>
      <li className="text-2xl font-bold py-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] hover:text-[#131a4b] hover:underline">
        <Link onClick={toggleNav} to="/SupportPage">About</Link>
      </li>
      <li className="text-2xl font-bold py-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] hover:text-[#131a4b] hover:underline">
        <Link onClick={toggleNav} to="/Deals">Contacts</Link>
      </li>
      <li className="text-2xl font-bold py-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] hover:underline">
        <Link className="bg-[#131a4b] text-white px-4 rounded-md py-2" onClick={toggleNav} to='/SignUpFormClient'>
          Sign In
        </Link>
      </li>
    </ul>
  </div>
</nav>

  );
};

export default HomeNav;
