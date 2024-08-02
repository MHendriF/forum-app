import PropTypes from 'prop-types';

export default function Textarea({ name, register, errors }) {
  return (
    <>
      <textarea
        id={name}
        rows="4"
        name={name}
        className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm ${
          errors[name] ? 'border-red-500' : ''
        }`}
        {...register(name)}
      />
      {errors[name] && (
        <p className="mt-1 text-sm text-red-500">{errors[name].message}</p>
      )}
    </>
  );
}

Textarea.propTypes = {
  name: PropTypes.string,
  register: PropTypes.func,
  errors: PropTypes.object,
};
