import { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../../context/ThemeContext';
import LocaleContext from '../../context/LocaleContext';
import PropTypes from 'prop-types';
import { Typography } from '@material-tailwind/react';

const AuthLayouts = (props) => {
    const { children, title, type } = props;
    const { theme } = useContext(ThemeContext);
    const { locale } = useContext(LocaleContext);

    return (
        <Fragment>
            <div className={`flex justify-center min-h-screen items-center ${theme === 'dark' && 'bg-gray-900'}`}>
                <div className='w-full max-w-xs'>
                    <Typography variant='h4' color='blue'>
                        {title}
                    </Typography>
                    <Typography color={theme === 'dark' ? 'white' : 'gray'} className='mt-1 mb-8 font-normal'>
                        {locale === 'id' ? 'Silahkan lengkapi data di bawah ini' : 'Welcome, please enter your details'}
                    </Typography>
                    {children}
                    <Navigation type={type} />
                </div>
            </div>
        </Fragment>
    );
};

const Navigation = ({ type }) => {
    const { theme } = useContext(ThemeContext);
    const { locale } = useContext(LocaleContext);

    if (type === 'login') {
        return (
            <Typography color={theme === 'dark' ? 'white' : 'gray'} className='mt-5 mb-8 text-center' variant='small'>
                {locale === 'id' ? 'Belum punya akun? ' : `Don't have an account? `}
                <Link to='/register' className='text-blue-600 font-semibold'>
                    {locale === 'id' ? 'Daftar' : 'Register'}
                </Link>
            </Typography>
        );
    } else {
        return (
            <Typography color={theme === 'dark' ? 'white' : 'gray'} className='mt-5 mb-8 text-center' variant='small'>
                {locale === 'id' ? 'Sudah punya akun? ' : 'Have an account? '}
                <Link to='/' className='text-blue-600 font-semibold'>
                    {locale === 'id' ? 'Masuk' : 'Login'}
                </Link>
            </Typography>
        );
    }
};

AuthLayouts.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

Navigation.propTypes = {
    type: PropTypes.string.isRequired,
};

export default AuthLayouts;
