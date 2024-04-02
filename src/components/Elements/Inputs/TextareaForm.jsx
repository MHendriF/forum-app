import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import TextareaCustom from './TextareaCustom';

const TextareaForm = forwardRef((props, ref) => {
    const { label, name, rows, placeholder, value, onInput, color } = props;
    return (
        <div className='mb-6'>
            <TextareaCustom name={name} label={label} value={value} rows={rows} placeholder={placeholder} ref={ref} onInput={onInput} color={color} />
        </div>
    );
});

TextareaForm.propTypes = {
    label: PropTypes.string.isRequired,
    rows: PropTypes.number.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onInput: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
};

export default TextareaForm;
