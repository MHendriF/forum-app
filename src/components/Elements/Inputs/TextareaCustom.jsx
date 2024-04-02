import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Textarea } from '@material-tailwind/react';

const TextareaCustom = forwardRef((props, ref) => {
    const { rows, label, placeholder, name, value, onInput, color } = props;

    return (
        <Textarea id={name} label={label} placeholder={placeholder} onInput={onInput} rows={rows} name={name} value={value} ref={ref} color={color} />
    );
});

TextareaCustom.propTypes = {
    rows: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onInput: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
};

export default TextareaCustom;
