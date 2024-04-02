import { Fragment, useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncSearchActiveNotes } from '../redux/states/notes/action';
import ThemeContext from '../context/ThemeContext';
import CardNote from '../components/Fragments/CardNote';
import InputForm from '../components/Elements/Inputs/InputForm';
import LocaleContext from '../context/LocaleContext';

const NotePage = () => {
    const dispatch = useDispatch();
    const { theme } = useContext(ThemeContext);
    const { locale } = useContext(LocaleContext);
    const [keyword, setKeyword] = useState('');
    const { notes = [] } = useSelector((states) => states);

    useEffect(() => {
        dispatch(asyncSearchActiveNotes(keyword));
    }, [dispatch, keyword]);

    const handleSearch = (e) => {
        let char = e.target.value;
        setKeyword(char);
    };

    return (
        <Fragment>
            <div className={`w-full min-h-screen  ${theme === 'dark' && 'bg-gray-900'}`}>
                <div className='w-full pt-20 px-20'>
                    <InputForm
                        label={locale === 'id' ? 'Pencarian' : 'Search'}
                        name='search'
                        type='text'
                        value={keyword}
                        placeholder={locale === 'id' ? 'Cari berdasarkan judul...' : 'Search by title...'}
                        onInput={(e) => handleSearch(e)}
                        required={false}
                        color={theme === 'dark' ? 'white' : 'gray'}
                    />
                </div>

                <h1 className={`text-3xl font-bold mb-2 pt-10 ml-20 ${theme === 'dark' ? 'text-white' : 'text-blue-600'}`}>
                    {locale === 'id' ? 'Catatan' : 'Notes'}
                </h1>
                <div className='flex flex-wrap w-full mx-20'>
                    {notes.length > 0 &&
                        notes.map((note) => (
                            <CardNote key={note.id}>
                                <CardNote.Header id={note.id} title={note.title} createdAt={`${note.createdAt}`}></CardNote.Header>
                                <CardNote.Body>{note.body}</CardNote.Body>
                            </CardNote>
                        ))}
                </div>
                {notes.length === 0 && (
                    <div className={`w-full flex items-center justify-center pb-20 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                        {locale === 'id' ? `--- Catatan kosong ---` : `--- Your notes is empty ---`}
                    </div>
                )}
            </div>
        </Fragment>
    );
};

export default NotePage;
