import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export default function NavbarLink({ link, className, children }) {
  return (
    <Link
      to={link}
      className={clsx(
        'text-white text-md font-bold hover:text-slate-400 transition duration-300 ease-in-out',
        className,
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
