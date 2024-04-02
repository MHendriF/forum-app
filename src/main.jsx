import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ThemeProvider } from './context/ThemeContext';
import { LocaleProvider } from './context/LocaleContext';
import Root from './Root';
import RequireAuth from './RequireAuth';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import NotePage from './pages/note';
import DetailNotePage from './pages/detailNote';
import ArchivePage from './pages/archive';
import ProfilePage from './pages/profile';
import ErrorPage from './pages/error404';
import CreateNotePage from './pages/createNote';
import './index.css';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />} errorElement={<ErrorPage />}>
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />

            <Route element={<RequireAuth />}>
                <Route index element={<NotePage />} />
                <Route path='notes/create' element={<CreateNotePage />} />
                <Route path='notes/:id' element={<DetailNotePage />} />
                <Route path='archives' element={<ArchivePage />} />
                <Route path='profile' element={<ProfilePage />} />
            </Route>
        </Route>,
    ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <React.StrictMode>
            <ThemeProvider>
                <LocaleProvider>
                    <RouterProvider router={router} />
                </LocaleProvider>
            </ThemeProvider>
        </React.StrictMode>
    </Provider>,
);
