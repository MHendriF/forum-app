import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../../utils/api';
import ActionType from '../../../utils/ActionType';

export const addNoteActionCreator = (note) => {
    return {
        type: ActionType.ADD_NOTE,
        payload: {
            note,
        },
    };
};

export const getNoteActionCreator = (note) => {
    return {
        type: ActionType.GET_NOTE,
        payload: {
            note,
        },
    };
};

export const deleteNoteActionCreator = (noteId) => {
    return {
        type: ActionType.DELETE_NOTE,
        payload: {
            noteId,
        },
    };
};

export const archiveNoteActionCreator = (noteId) => {
    return {
        type: ActionType.ARCHIVE_NOTE,
        payload: {
            noteId,
        },
    };
};

export const unarchiveNoteActionCreator = (noteId) => {
    return {
        type: ActionType.UNARCHIVE_NOTE,
        payload: {
            noteId,
        },
    };
};

export const asyncAddNote = (data) => {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const response = await api.addNote(data);
            dispatch(addNoteActionCreator(response));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
};

export const asyncGetNote = (id) => {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const response = await api.getNote(id);
            dispatch(getNoteActionCreator(response));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
};

export const asyncDeleteNote = (id) => {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const response = await api.deleteNote(id);
            dispatch(deleteNoteActionCreator(response));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
};

export const asyncArchiveNote = (id) => {
    return async (dispatch) => {
        dispatch(showLoading());
        dispatch(archiveNoteActionCreator(id));
        try {
            await api.archiveNote(id);
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
};

export const asyncUnarchiveNote = (id) => {
    return async (dispatch) => {
        dispatch(showLoading());
        dispatch(unarchiveNoteActionCreator(id));
        try {
            await api.unarchiveNote(id);
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
};
