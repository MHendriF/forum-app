import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const DOMAIN = {
  NAME: 'user',
};

const EVENT = {
  RECEIVE: 'receive',
  REGISTER: 'register',
};

const ActionType = {
  RECEIVE_USERS: `${DOMAIN.NAME}/${EVENT.RECEIVE}`,
  REGISTER_USER: `${DOMAIN.NAME}/${EVENT.REGISTER}`,
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function registerUserActionCreator(user) {
  return {
    type: ActionType.REGISTER_USER,
    payload: {
      user,
    },
  };
}

function asyncRegisterUser({ name, email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const user = await api.register({ name, email, password });
      dispatch(registerUserActionCreator(user));
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

export {
  ActionType,
  receiveUsersActionCreator,
  registerUserActionCreator,
  asyncRegisterUser,
};
