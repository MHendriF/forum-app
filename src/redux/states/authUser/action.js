import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../../utils/api';
import ActionType from '../../../utils/ActionType';

export const setAuthUserActionCreator = (authUser) => {
    return {
        type: ActionType.SET_AUTH_USER,
        payload: {
            authUser,
        },
    };
};

export const unsetAuthUserActionCreator = () => {
    return {
        type: ActionType.UNSET_AUTH_USER,
        payload: {
            authUser: null,
        },
    };
};

export const asyncSetAuthUser = (data) => {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const accessToken = await api.login(data);
            api.putAccessToken(accessToken);
            const authUser = await api.getUserLogged();
            dispatch(setAuthUserActionCreator(authUser));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
};

export const asyncUnsetAuthUser = () => {
    return (dispatch) => {
        dispatch(showLoading());
        dispatch(unsetAuthUserActionCreator());
        api.putAccessToken('');
        dispatch(hideLoading());
    };
};

export const asyncGetAuthUser = () => {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const authUser = await api.getUserLogged();
            dispatch(setAuthUserActionCreator(authUser));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
};
