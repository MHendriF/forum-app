import { React, useEffect } from 'react';
import { Outlet, ScrollRestoration, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { asyncUnsetAuthUser } from './redux/states/authUser/action';
import { asyncPreloadProcess } from './redux/states/isPreload/action';
import Loading from './components/Elements/Loadings/Loading';
import { NavbarContainer } from './components/Layouts/NavbarContainer';

export default function Root() {
    const { authUser = null, isPreload = false } = useSelector((states) => states);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(asyncPreloadProcess());
    }, [dispatch]);

    if (isPreload) {
        return null;
    }

    const onLogOut = () => {
        dispatch(asyncUnsetAuthUser());
        navigate('/');
    };

    const onNavigateToProfile = () => {
        navigate('/profile');
    };

    return (
        <>
            <Loading />
            <div>
                <header>
                    <NavbarContainer authUser={authUser} logOut={onLogOut} navigateToProfile={onNavigateToProfile} />
                </header>
                <main>
                    {/* route seperti `login`, `index` akan berada di dalam `Outlet` */}
                    <Outlet />
                    {/* mengembalikan posisi scrollbar ke atas setelah pindah halaman */}
                    <ScrollRestoration />
                </main>
            </div>
        </>
    );
}
