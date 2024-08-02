import Label from "./Label";
import Input from "./Input";
import PropTypes from "prop-types";

export default function InputForm({ label, name, type, placeholder, value, onChange }) {
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} value={value} onChange={onChange}></Input>
    </div>
  );
}

InputForm.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
