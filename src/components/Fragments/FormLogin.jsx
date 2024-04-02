import { React, useEffect, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncSetAuthUser } from '../../redux/states/authUser/action';
import useInput from '../../hooks/useInput';
import ThemeContext from '../../context/ThemeContext';
import LocaleContext from '../../context/LocaleContext';
import ButtonCostum from '../Elements/Buttons';
import InputForm from '../Elements/Inputs/InputForm';

export default function FormLogin() {
    const { authUser = null } = useSelector((states) => states);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const emailRef = useRef(null);
    const [email, setEmail] = useInput('');
    const [password, setPassword] = useInput('');
    const { theme } = useContext(ThemeContext);
    const { locale } = useContext(LocaleContext);

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    useEffect(() => {
        if (authUser) {
            navigate('/');
        }
    }, [authUser]);

    const handleLogin = (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
        };
        dispatch(asyncSetAuthUser(data));
    };

    return (
        <form onSubmit={handleLogin}>
            <InputForm
                label='Email'
                name='email'
                value={email}
                onInput={setEmail}
                type='email'
                placeholder='example@email.com'
                ref={emailRef}
                color={theme === 'dark' ? 'white' : 'gray'}></InputForm>
            <InputForm
                label='Password'
                name='password'
                value={password}
                onInput={setPassword}
                type='password'
                placeholder='********'
                color={theme === 'dark' ? 'white' : 'gray'}></InputForm>
            <ButtonCostum classname='w-full' color={'blue'} type='submit'>
                {locale === 'id' ? 'Masuk' : 'Login'}
            </ButtonCostum>
        </form>
    );
}
