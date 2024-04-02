import { React, useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Typography } from '@material-tailwind/react';
import { asyncAddNote } from '../../redux/states/note/action';
import useInput from '../../hooks/useInput';
import ThemeContext from '../../context/ThemeContext';
import InputForm from '../Elements/Inputs/InputForm';
import TextareaForm from '../Elements/Inputs/TextareaForm';
import ButtonCostum from '../Elements/Buttons';
import LocaleContext from '../../context/LocaleContext';

function FormAddNote() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [title, setTitle] = useInput('');
    const [body, setBody] = useInput('');
    const { theme } = useContext(ThemeContext);
    const { locale } = useContext(LocaleContext);
    const titleRef = useRef(null);

    useEffect(() => {
        titleRef.current.focus();
    }, []);

    const handleAddNote = (e) => {
        e.preventDefault();
        const data = {
            title: e.target.title.value,
            body: e.target.body.value,
        };

        dispatch(asyncAddNote(data));
        navigate('/notes');
    };

    return (
        <form onSubmit={handleAddNote}>
            <Typography variant='h2' color={`${theme === 'dark' ? 'white' : 'blue'}`} className='text-center mb-10'>
                {locale === 'id' ? 'Buat Catatan' : 'Create Notes'}
            </Typography>
            <InputForm
                label={locale === 'id' ? 'Judul' : 'Title'}
                name='title'
                type='text'
                value={title}
                onInput={setTitle}
                placeholder={locale === 'id' ? 'Judul' : 'Title'}
                ref={titleRef}
                required
                color={theme === 'dark' ? 'white' : 'gray'}
            />
            <TextareaForm
                label={locale === 'id' ? 'Deskripsi' : 'Description'}
                name='body'
                value={body}
                onInput={setBody}
                rows={8}
                placeholder=''
                color={theme === 'dark' ? 'blue-gray' : 'gray'}
            />
            <ButtonCostum classname={`w-full ${!theme === 'dark' && 'text-white'}`} color={theme === 'dark' ? 'white' : 'blue'} type='submit'>
                Submit
            </ButtonCostum>
        </form>
    );
}

export default FormAddNote;
