import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../../utils/api';
import ActionType from '../../../utils/ActionType';

export const getActiveNotesActionCreator = (notes) => {
    return {
        type: ActionType.GET_ACTIVE_NOTES,
        payload: {
            notes,
        },
    };
};

export const getArchivedNotesActionCreator = (notes) => {
    return {
        type: ActionType.GET_ARCHIVED_NOTES,
        payload: {
            notes,
        },
    };
};

export const searchActiveNotesActionCreator = (notes, keyword) => {
    return {
        type: ActionType.SEARCH_ACTIVE_NOTES,
        payload: {
            notes,
            keyword,
        },
    };
};

export const searchArchivedNotesActionCreator = (notes, keyword) => {
    return {
        type: ActionType.SEARCH_ARCHIVED_NOTES,
        payload: {
            notes,
            keyword,
        },
    };
};

export const asyncGetActiveNotes = () => {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const response = await api.getActiveNotes();
            dispatch(getActiveNotesActionCreator(response));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
};

export const asyncGetArchivedNotes = () => {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const response = await api.getArchivedNotes();
            dispatch(getArchivedNotesActionCreator(response));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
};

export const asyncSearchActiveNotes = (keyword) => {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const notes = await api.getActiveNotes();
            dispatch(searchActiveNotesActionCreator(notes, keyword));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
};

export const asyncSearchArchivedNotes = (keyword) => {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const notes = await api.getArchivedNotes();
            dispatch(searchArchivedNotesActionCreator(notes, keyword));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
};
