import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";

export default function NavbarLink({ link, className, children }) {
  return (
    <Link
      to={link}
      className={clsx(
        "text-white text-lg font-bold hover:text-blue-300 transition duration-300 ease-in-out",
        className
      )}
    >
      {children}
    </Link>
  );
}

NavbarLink.propTypes = {
  link: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};