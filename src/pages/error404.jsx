import { Typography } from '@material-tailwind/react';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';

const ErrorPage = () => {
    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`grid place-items-center w-full min-h-screen px-6 lg:px-8  ${theme === 'dark' && 'bg-gray-900'}`}>
            <div className='text-center'>
                <Typography variant='small' color={theme === 'dark' ? 'white' : 'blue'} className='mb-2'>
                    404
                </Typography>
                <Typography variant='h1' color={theme === 'dark' ? 'white' : 'blue-gray'} className='mb-4'>
                    Page Not Found
                </Typography>
                <Button size='md' color={theme === 'dark' ? 'white' : 'blue'} type='button' onClick={() => navigate(`/`)}>
                    Go back home
                </Button>
            </div>
        </div>
    );
};

export default ErrorPage;
