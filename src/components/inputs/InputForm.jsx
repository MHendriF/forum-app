import PropTypes from 'prop-types';
import Label from './Label';
import Input from './Input';

export default function InputForm({
  label,
  name,
  type,
  placeholder,
  register,
  errors,
}) {
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        register={register}
        errors={errors}
      />
    </div>
  );
}

InputForm.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

InputForm.defaultProps = {
  placeholder: null,
};
