// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-around">
          <Link to="/" className="text-white text-lg font-bold">
            Home
          </Link>
          <Link to="/leaderboard" className="text-white text-lg font-bold">
            Leaderboard
          </Link>
          <Link to="/login" className="text-white text-lg font-bold">
            Login
          </Link>
          <Link to="/register" className="text-white text-lg font-bold">
            Register
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
