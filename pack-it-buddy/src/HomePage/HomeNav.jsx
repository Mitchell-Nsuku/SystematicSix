import  { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PackitByddyLogo from '../assets/OurLogo.png';

const HomeNav = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);

  return (
<nav className="flex justify-between items-center w-full h-20 px-4 bg-white shadow-lg">
  {/* Logo Section */}
  <div>
    <Link to="/">
      <img
        src={PackitByddyLogo}
        alt="Our Logo"
        className="object-contain h-48 w-32 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] text-3xl mb-10"
      />
    </Link>
  </div>

  {/* Desktop Menu */}
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
      <ul className="absolute left-0 top-full w-48 bg-white text-gray-700 opacity-0 group-hover:opacity-100 group-hover:block hidden transition-opacity duration-200 z-50">
        <li className="px-4 py-2 hover:bg-gray-200 shadow-sm cursor-pointer">Local Moving</li>
        <li className="px-4 py-2 hover:bg-gray-200 shadow-sm cursor-pointer"> <Link to='/BusinessMove'>Business Move</Link> </li>
        <li className="px-4 py-2 hover:bg-gray-200 shadow-sm cursor-pointer">Packing Services</li>
      </ul>
</li>


    <li className="relative group">
      <Link
        className="px-4 cursor-pointer capitalize font-bold text-gray-800 hover:scale-105 duration-200"
        to="/About"
      >
        About
      </Link>
      
    </li>

    <li className="relative group">
      <Link
        className="px-4 cursor-pointer capitalize font-bold text-gray-800 hover:scale-105 duration-200"
        to="/"
      >
        Contact
      </Link>
      <ul className="absolute left-0 top-full w-48 bg-white text-gray-700 opacity-0 group-hover:opacity-100 group-hover:block hidden transition-opacity duration-200 z-50">
        <li className="px-4 py-2 hover:bg-gray-200 shadow-sm cursor-pointer">Location</li>
        <li className="px-4 py-2 hover:bg-gray-200 shadow-sm cursor-pointer">Support</li>
      </ul>
</li>

    <label className="nav-item text-white">
      <Link className='bg-[#131a4b] font-bold px-4 py-2 rounded-md hover:bg-blue-700 duration-200' to='/SignUpFormClient'>
        Sign In
      </Link>
    </label>
  </ul>

  {/* Mobile Hamburger Icon */}
  <div
    onClick={toggleNav}
    className="cursor-pointer pr-4 z-20 text-gray-500 md:hidden"
    aria-label="Toggle navigation menu"
  >
    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
  </div>

  {/* Mobile Menu */}
  <div
    className={`fixed top-20 left-0 w-full bg-white text-gray-500 z-50 flex flex-col items-center transition-transform duration-300 md:hidden ${nav ? 'translate-x-0' : '-translate-x-full'}`}
  >
    <ul className="flex flex-col items-center w-full text-center gap-4 py-8">
      <li className="px-4 hover:text-[#131a4b] cursor-pointer capitalize py-2 text-lg">
        <Link onClick={toggleNav} to="/SignUpFormDriver">Become a driver</Link>
      </li>
      <li className="px-4 hover:text-[#131a4b] cursor-pointer capitalize py-2 text-lg">
        <Link onClick={toggleNav} to="/Reviews">Services</Link>
      </li>
      <li className="px-4 hover:text-[#131a4b] cursor-pointer capitalize py-2 text-lg">
        <Link onClick={toggleNav} to="/SupportPage">About</Link>
      </li>
      <li className="px-4 hover:text-[#131a4b] cursor-pointer capitalize py-2 text-lg">
        <Link onClick={toggleNav} to="/Deals">Contacts</Link>
      </li>
      <label className="w-full">
        <Link className='bg-[#131a4b] font-bold px-4 py-2 rounded-md text-white w-auto' to='/SignUpFormClient'>
          Sign In
        </Link>
      </label>
    </ul>
  </div>
</nav>


  );
};

export default HomeNav;
