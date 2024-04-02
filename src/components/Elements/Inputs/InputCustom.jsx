import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Input } from '@material-tailwind/react';

const InputCustom = forwardRef((props, ref) => {
    const { type, label, placeholder, name, value, onInput, required, color } = props;

    return (
        <Input
            id={name}
            type={type}
            label={label}
            placeholder={placeholder}
            onInput={onInput}
            name={name}
            value={value}
            ref={ref}
            required={required}
            color={color}
        />
    );
});

InputCustom.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onInput: PropTypes.func.isRequired,
    required: PropTypes.bool,
    color: PropTypes.string.isRequired,
};

export default InputCustom;
