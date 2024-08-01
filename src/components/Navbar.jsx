// src/components/Navbar.jsx
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaHome, FaTrophy, FaSignInAlt, FaUserPlus, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = ({ authUser, signOut }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/" className="hover:text-blue-300 transition duration-300 ease-in-out">
            Forum App
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-white text-lg font-bold flex items-center hover:text-blue-300 transition duration-300 ease-in-out"
          >
            <FaHome className="mr-2" /> Home
          </Link>
          <Link
            to="/leaderboard"
            className="text-white text-lg font-bold flex items-center hover:text-blue-300 transition duration-300 ease-in-out"
          >
            <FaTrophy className="mr-2" /> Leaderboard
          </Link>
          <Link
            to="/login"
            className="text-white text-lg font-bold flex items-center hover:text-blue-300 transition duration-300 ease-in-out"
          >
            <FaSignInAlt className="mr-2" /> Login
          </Link>
          <Link
            to="/register"
            className="text-white text-lg font-bold flex items-center hover:text-blue-300 transition duration-300 ease-in-out"
          >
            <FaUserPlus className="mr-2" /> Register
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <Link
            to="/"
            className="block text-white text-lg font-bold py-2 hover:text-blue-300 transition duration-300 ease-in-out"
          >
            <FaHome className="mr-2 inline-block" /> Home
          </Link>
          <Link
            to="/leaderboard"
            className="block text-white text-lg font-bold py-2 hover:text-blue-300 transition duration-300 ease-in-out"
          >
            <FaTrophy className="mr-2 inline-block" /> Leaderboard
          </Link>
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
