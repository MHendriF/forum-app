import { React } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-tailwind/react';

export default function ButtonCostum(props) {
    const { children, classname, onClick = () => {}, type = 'button', color = 'blue' } = props;
    return (
        <Button className={`${classname}`} type={type} onClick={onClick} color={color}>
            {children}
        </Button>
    );
}

ButtonCostum.propTypes = {
    children: PropTypes.node.isRequired,
    classname: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
    color: PropTypes.string,
};
