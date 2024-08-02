import Label from './Label';
import Textarea from './Textarea';
import PropTypes from 'prop-types';

export default function TextareaForm({ label, name, register, errors }) {
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Textarea name={name} register={register} errors={errors}></Textarea>
    </div>
  );
}

TextareaForm.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.func,
  errors: PropTypes.object,
};
