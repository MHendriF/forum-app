import PropTypes from 'prop-types';
import Label from './Label';
import Textarea from './Textarea';

export default function TextareaForm({ label, name, register, errors }) {
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Textarea name={name} register={register} errors={errors} />
    </div>
  );
}

TextareaForm.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
};
