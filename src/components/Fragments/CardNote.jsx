import { React, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../../utils';
import ThemeContext from '../../context/ThemeContext';
import LocaleContext from '../../context/LocaleContext';

export default function CardNote(props) {
    const { theme } = useContext(ThemeContext);
    const { children } = props;

    return (
        <div
            className={`w-full max-w-xs border border-white-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between text-white 
                ${theme === 'dark' ? 'bg-gray-800 ' : 'bg-blue-600'}`}>
            {children}
        </div>
    );
}

function Header(props) {
    const { id, title, createdAt } = props;
    const { locale } = useContext(LocaleContext);

    const getFormatDate = () => {
        if (locale === 'id') return 'id-ID';
        return 'en-US';
    };

    return (
        <div className='px-5 py-5 pb-5'>
            <Link to={`/notes/${id}`} className='dark:text-white hover:underline'>
                <h5 className='text-xl font-semibold tracking-tight '>{title.length > 30 ? `${title.substring(0, 29)}...` : title}</h5>
            </Link>
            <p className='text-xs '>{showFormattedDate(createdAt, getFormatDate())}</p>
        </div>
    );
}

function Body(props) {
    const { children } = props;
    return (
        <div className='px-5 pb-5 h-full'>
            <p className='text-m '>{children.length > 200 ? `${children.substring(0, 200)}...` : children}</p>
        </div>
    );
}

CardNote.Header = Header;
CardNote.Body = Body;

CardNote.propTypes = { children: PropTypes.node.isRequired };

Header.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};

Body.propTypes = { children: PropTypes.node.isRequired };
