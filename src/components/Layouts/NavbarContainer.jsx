import { React, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Navbar, Typography, IconButton, Avatar } from '@material-tailwind/react';
import { ArrowRightEndOnRectangleIcon, MoonIcon, LanguageIcon, SunIcon } from '@heroicons/react/24/solid';
import LocaleContext from '../../context/LocaleContext';
import ThemeContext from '../../context/ThemeContext';

export function NavbarContainer({ authUser, logOut, navigateToProfile }) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { locale, toggleLocale } = useContext(LocaleContext);

    return (
        <Navbar
            variant='gradient'
            color={`${theme === 'light' ? 'blue' : 'gray'}`}
            className={`${theme === 'light' ? 'from-blue-700 to-blue-600' : 'from-gray-800 to-gray-700'} mx-auto max-w-screen-3xl  px-4 py-3 rounded-none`}>
            <div className='flex flex-wrap items-center justify-between gap-y-4 px-5 text-white'>
                {authUser && (
                    <>
                        <Typography as='a' variant='h6' className='mr-4 ml-2 cursor-pointer py-1.5'>
                            <Link to={`/`}>{locale === 'id' ? 'Catatan' : 'Notes'}</Link>
                        </Typography>
                        <Typography as='a' variant='h6' className='mr-4 ml-2 cursor-pointer py-1.5'>
                            <Link to={`/archives`}>{locale === 'id' ? 'Arsip' : 'Archives'}</Link>
                        </Typography>
                        <Typography as='a' variant='h6' className='mr-4 ml-2 cursor-pointer py-1.5'>
                            <Link to={`/notes/create`}>{locale === 'id' ? 'Buat Catatan' : 'Create Notes'}</Link>
                        </Typography>
                    </>
                )}

                <div className='ml-auto flex gap-1 md:mr-4'>
                    <IconButton variant='text' color='white' onClick={() => toggleLocale()}>
                        <LanguageIcon className='h-4 w-4' />
                    </IconButton>
                    <IconButton variant='text' color='white' onClick={() => toggleTheme()}>
                        {theme === 'light' ? <SunIcon className='h-4 w-4' /> : <MoonIcon className='h-4 w-4' />}
                    </IconButton>
                    {authUser && (
                        <>
                            <div className='flex items-center gap-2 mr-1 cursor-pointer' onClick={navigateToProfile}>
                                <Avatar src='https://docs.material-tailwind.com/img/face-2.jpg' alt='avatar' size='sm' />
                                <div>
                                    <Typography variant='small' color='white'>
                                        {authUser.name}
                                    </Typography>
                                </div>
                            </div>
                            <IconButton variant='text' color='white' onClick={logOut}>
                                <ArrowRightEndOnRectangleIcon className='h-4 w-4' />
                            </IconButton>
                        </>
                    )}
                </div>
            </div>
        </Navbar>
    );
}

NavbarContainer.propTypes = {
    authUser: PropTypes.object,
    logOut: PropTypes.func.isRequired,
    navigateToProfile: PropTypes.func.isRequired,
};
