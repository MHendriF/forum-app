import { React, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Chip, IconButton, SpeedDial, SpeedDialHandler, SpeedDialContent, SpeedDialAction, Typography } from '@material-tailwind/react';
import { PlusIcon, ArchiveBoxArrowDownIcon, ArchiveBoxXMarkIcon, TrashIcon } from '@heroicons/react/24/outline';
import { asyncArchiveNote, asyncDeleteNote, asyncGetNote, asyncUnarchiveNote } from '../redux/states/note/action';
import ThemeContext from '../context/ThemeContext';
import LocaleContext from '../context/LocaleContext';
import { showFormattedDate } from '../utils';

export default function DetailNotePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { theme } = useContext(ThemeContext);
    const { locale } = useContext(LocaleContext);
    const { id } = useParams();
    const { note = null } = useSelector((states) => states);

    useEffect(() => {
        dispatch(asyncGetNote(id));
    }, [id, dispatch]);

    if (!note) {
        return null;
    }

    function handleDeleteNote(noteId) {
        dispatch(asyncDeleteNote(noteId));
        navigate('/');
    }

    const handleArchiveNote = (noteId) => {
        if (note.archived) {
            dispatch(asyncUnarchiveNote(noteId));
        } else {
            dispatch(asyncArchiveNote(noteId));
        }
    };

    const getFormatDate = () => {
        if (locale === 'id') return 'id-ID';
        return 'en-US';
    };

    return (
        <div className={`w-full min-h-screen  ${theme === 'dark' && 'bg-gray-900'}`}>
            <div className='flex items-center justify-center pt-20'>
                <div className='w-full mx-40 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                    {note.archived && (
                        <Chip
                            className='flex w-min items-center justify-center'
                            variant='ghost'
                            size='lg'
                            value={`${locale === 'id' ? 'Diarsipkan' : 'Archived'}`}
                        />
                    )}
                    <Typography variant='h1' color='blue-gray'>
                        {note.title}
                    </Typography>
                    <Typography variant='small' color='gray' className='mb-4'>
                        {showFormattedDate(note.createdAt, getFormatDate())}
                    </Typography>
                    <Typography variant='paragraph' color='gray' className='mb-1'>
                        {note.body}
                    </Typography>
                </div>
            </div>

            <div className='relative h-80 w-full'>
                <div className='absolute bottom-0 right-10'>
                    <SpeedDial>
                        <SpeedDialHandler>
                            <IconButton size='lg' className={`${theme === 'dark' && 'bg-white'} rounded-full`}>
                                <PlusIcon className='h-5 w-5 transition-transform group-hover:rotate-45' color={`${theme === 'dark' && 'black'}`} />
                            </IconButton>
                        </SpeedDialHandler>
                        <SpeedDialContent>
                            <SpeedDialAction className='h-16 w-16' onClick={() => handleArchiveNote(note.id)}>
                                {!note.archived ? <ArchiveBoxArrowDownIcon className='h-5 w-5' /> : <ArchiveBoxXMarkIcon className='h-5 w-5' />}
                                <Typography color='blue-gray' className='text-xs font-normal'>
                                    {!note.archived ? 'Archive' : 'Unarchive'}
                                </Typography>
                            </SpeedDialAction>
                            <SpeedDialAction className='h-16 w-16' onClick={() => handleDeleteNote(note.id)}>
                                <TrashIcon className='h-5 w-5' />
                                <Typography color='blue-gray' className='text-xs font-normal'>
                                    Delete
                                </Typography>
                            </SpeedDialAction>
                        </SpeedDialContent>
                    </SpeedDial>
                </div>
            </div>
        </div>
    );
}
