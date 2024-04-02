import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../../utils/api';
import ActionType from '../../../utils/ActionType';
import { setAuthUserActionCreator } from '../authUser/action';

export const setIsPreloadActionCreator = (isPreload) => {
    return {
        type: ActionType.SET_IS_PRELOAD,
        payload: {
            isPreload,
        },
    };
};

export const asyncPreloadProcess = () => {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const authUser = await api.getUserLogged();
            dispatch(setAuthUserActionCreator(authUser));
        } catch (error) {
            dispatch(setAuthUserActionCreator(null));
        } finally {
            dispatch(setIsPreloadActionCreator(false));
        }
        dispatch(hideLoading());
    };
};
