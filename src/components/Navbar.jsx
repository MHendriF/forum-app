// src/components/Navbar.jsx
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaHome, FaTrophy, FaBars, FaTimes, FaUser } from "react-icons/fa";
import { useState } from "react";
import NavbarLink from "./NavbarLink";
import { FaArrowRightToBracket } from "react-icons/fa6";

const Navbar = ({ authUser, signOut }) => {
  //console.log("🚀 ~ Navbar ~ authUser:", authUser);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-slate-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/" className="hover:text-slate-400 transition duration-300 ease-in-out">
            Forum App
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <NavbarLink link="/" className="flex items-center">
            <FaHome className="mr-2" /> Home
          </NavbarLink>
          <NavbarLink link="/leaderboard" className="flex items-center">
            <FaTrophy className="mr-2" /> Leaderboard
          </NavbarLink>
          {authUser && (
            <>
              <NavbarLink link="/profile" className="flex items-center">
                <FaUser className="mr-2" /> My Profile
              </NavbarLink>
              <NavbarLink link="/logout" className="flex items-center" onClick={signOut}>
                <FaArrowRightToBracket className="mr-2" /> Logout
              </NavbarLink>
            </>
          )}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <NavbarLink link="/" className="block py-2">
            <FaHome className="mr-2 inline-block" /> Home
          </NavbarLink>
          <NavbarLink link="/leaderboard" className="block py-2">
            <FaTrophy className="mr-2 inline-block" /> Leaderboard
          </NavbarLink>
          <NavbarLink link="/" className="block py-2">
            <FaUser className="mr-2 inline-block" /> My Profile
          </NavbarLink>
          <NavbarLink link="/" className="block py-2">
            <FaArrowRightToBracket className="mr-2 inline-block" /> Logout
          </NavbarLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

const authUserShape = {
  name: PropTypes.string.isRequired,
};

Navbar.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};
