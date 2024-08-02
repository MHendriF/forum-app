import Label from "./Label";
import Textarea from "./Textarea";
import PropTypes from "prop-types";

const TextareaForm = ({ label, name, value, onChange }) => {
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Textarea name={name} value={value} onChange={onChange}></Textarea>
    </div>
  );
};

export default TextareaForm;
