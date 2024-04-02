import { React } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function RequireAuth() {
    const { authUser = null } = useSelector((states) => states);

    // arahkan ke halaman login jika tidak ada authUser
    if (authUser === null) return <Navigate to='/login' />;

    return <Outlet />;
}
