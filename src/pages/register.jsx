import { useContext } from 'react';
import FormRegister from '../components/Fragments/FormRegister';
import AuthLayouts from '../components/Layouts/AuthLayouts';
import LocaleContext from '../context/LocaleContext';

const RegisterPage = () => {
    const { locale } = useContext(LocaleContext);

    return (
        <AuthLayouts title={`${locale === 'id' ? 'Daftar' : 'Register'}`} type='register'>
            <FormRegister />
        </AuthLayouts>
    );
};

export default RegisterPage;
