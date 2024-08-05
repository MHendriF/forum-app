import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const DOMAIN = {
  NAME: 'auth',
};

const EVENT = {
  SET_AUTH: 'setAuthUser',
  UNSET_AUTH: 'unsetAuthUser',
};

const ActionType = {
  SET_AUTH_USER: `${DOMAIN.NAME}/${EVENT.SET_AUTH}`,
  UNSET_AUTH_USER: `${DOMAIN.NAME}/${EVENT.UNSET_AUTH}`,
};

function setAuthUserActionCreator(authUser) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
}

function unsetAuthUserActionCreator() {
  return {
    type: ActionType.UNSET_AUTH_USER,
    payload: {
      authUser: null,
    },
  };
}

function asyncSetAuthUser({ email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const token = await api.login({ email, password });
      api.putAccessToken(token);
      const authUser = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncUnsetAuthUser() {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(unsetAuthUserActionCreator());
    api.putAccessToken('');
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
};
