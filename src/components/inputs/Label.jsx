import PropTypes from 'prop-types';

export default function Label({ htmlFor, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-gray-700"
    >
      {children}
    </label>
  );
}

Label.propTypes = {
  htmlFor: PropTypes.string,
  children: PropTypes.node,
};
