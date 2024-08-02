import PropTypes from "prop-types";

const Textarea = ({ name, value, onChange }) => {
  return (
    <textarea
      id={name}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
      rows="4"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Textarea;
