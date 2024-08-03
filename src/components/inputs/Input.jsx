import PropTypes from 'prop-types';

export default function Input({ type, placeholder, name, register, errors }) {
  return (
    <>
      <input
        id={name}
        type={type}
        className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm ${
          errors[name] ? 'border-red-500' : ''
        }`}
        placeholder={placeholder}
        {...register(name)}
      />
      {errors[name] && (
        <p className="mt-1 text-sm text-red-500">{errors[name].message}</p>
      )}
    </>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

Input.defaultProps = {
  placeholder: null,
  errors: {},
};
