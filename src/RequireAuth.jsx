import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RequireAuth = () => {
    const { authUser = null } = useSelector((states) => states);

    // arahkan ke halaman login jika tidak ada authUser
    if (authUser === null) return <Navigate to='/login' />;

    return <Outlet />;
};

export default RequireAuth;
