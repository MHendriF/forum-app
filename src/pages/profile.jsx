import { useContext, React } from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@material-tailwind/react';
import ThemeContext from '../context/ThemeContext';

export default function ProfilePage() {
    const { theme } = useContext(ThemeContext);
    const { authUser = null } = useSelector((states) => states);

    return (
        <div className={`w-full min-h-screen  ${theme === 'dark' && 'bg-gray-900'}`}>
            <div className='flex items-center justify-center pt-20'>
                <div className='w-full max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                    <Typography variant='h1' color='blue-gray' className='mb-2'>
                        Profile
                    </Typography>
                    <Typography variant='paragraph' color='gray' className='mb-1'>
                        ID: {authUser.id}
                    </Typography>
                    <Typography variant='paragraph' color='gray' className='mb-1'>
                        Name: {authUser.name}
                    </Typography>
                    <Typography variant='paragraph' color='gray' className='mb-1'>
                        Email: {authUser.email}
                    </Typography>
                </div>
            </div>
        </div>
    );
}
