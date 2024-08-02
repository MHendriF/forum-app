import api from '../../utils/api';
import { setAuthUserActionCreator } from '../authUser/action';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

const ActionType = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};

function setIsPreloadActionCreator(isPreLoad) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreLoad,
    },
  };
}

function asyncPreloadProcess() {
  return async dispatch => {
    dispatch(showLoading());
    try {
      // preload process
      const authUser = await api.getOwnProfile();
      //console.log("🚀 ~ return ~ authUser:", authUser);
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      //console.log("🚀 ~ return ~ error:", error);
      // fallback process
      dispatch(setAuthUserActionCreator(null));
    } finally {
      // end preload process
      //console.log("setIsPreloadActionCreator: ", false);
      dispatch(setIsPreloadActionCreator(false));
    }
    dispatch(hideLoading());
  };
}

export { ActionType, setIsPreloadActionCreator, asyncPreloadProcess };
