import { React, forwardRef } from 'react';
import PropTypes from 'prop-types';
import InputCustom from './InputCustom';

const InputForm = forwardRef((props, ref) => {
    const { label, name, value, type, placeholder, onInput, required, color } = props;
    return (
        <div className='mb-6'>
            <InputCustom
                name={name}
                label={label}
                value={value}
                type={type}
                placeholder={placeholder}
                ref={ref}
                onInput={onInput}
                required={required}
                color={color}
            />
        </div>
    );
});

InputForm.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onInput: PropTypes.func.isRequired,
    required: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
};

export default InputForm;
