import PropTypes from "prop-types";

const Input = ({ type, placeholder, name, value, onChange }) => {
  return (
    <input
      id={name}
      type={type}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
