import Label from "./Label";
import Textarea from "./Textarea";
import PropTypes from "prop-types";

export default function TextareaForm({ label, name, value, onChange }) {
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Textarea name={name} value={value} onChange={onChange}></Textarea>
    </div>
  );
}

TextareaForm.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
