import { React, useContext } from 'react';
import FormLogin from '../components/Fragments/FormLogin';
import AuthLayouts from '../components/Layouts/AuthLayouts';
import LocaleContext from '../context/LocaleContext';

export default function LoginPage() {
    const { locale } = useContext(LocaleContext);

    return (
        <AuthLayouts title={`${locale === 'id' ? 'Masuk' : 'Login'}`} type='login'>
            <FormLogin />
        </AuthLayouts>
    );
}
