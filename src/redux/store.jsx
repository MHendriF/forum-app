import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authReducer from './states/authUser/reducer';
import notesReducer from './states/notes/reducer';
import noteReducer from './states/note/reducer';
import preloadReducer from './states/isPreload/reducer';
import usersReducer from './states/users/reducer';

const store = configureStore({
    reducer: {
        authUser: authReducer,
        isPreload: preloadReducer,
        notes: notesReducer,
        users: usersReducer,
        note: noteReducer,
        loadingBar: loadingBarReducer,
    },
});

export default store;
