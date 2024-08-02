import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

function asyncPopulateUsersAndThreads() {
  return async dispatch => {
    dispatch(showLoading());
    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      if (typeof window !== 'undefined') {
        window.alert(error.message);
      }
    }
    dispatch(hideLoading());
  };
}

export { asyncPopulateUsersAndThreads };
