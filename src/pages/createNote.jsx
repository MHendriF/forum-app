import { React, useContext } from 'react';
import FormAddNote from '../components/Fragments/FormAddNote';
import ThemeContext from '../context/ThemeContext';

export default function CreateNotePage() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`w-full min-h-screen  ${theme === 'dark' && 'bg-gray-900'}`}>
            <div className='flex items-center justify-center pt-10 pb-10'>
                <div className='w-full max-w-3xl'>
                    <FormAddNote />
                </div>
            </div>
        </div>
    );
}
