import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const DOMAIN = {
  NAME: 'leaderboard',
};

const EVENT = {
  RECEIVE: 'receive',
};

const ActionType = {
  RECEIVE_LEADERBOARDS: `${DOMAIN.NAME}/${EVENT.RECEIVE}`,
};

function receiveLeaderboardsActionCreator(leaderboards) {
  return {
    type: ActionType.RECEIVE_LEADERBOARDS,
    payload: {
      leaderboards,
    },
  };
}

function asyncReceiveLeaderboards() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const leaderboards = await api.getLeaderboards();
      dispatch(receiveLeaderboardsActionCreator(leaderboards));
    } catch (error) {
      if (typeof window !== 'undefined') {
        window.alert(error.message);
      }
    } finally {
      dispatch(hideLoading());
    }
  };
}

export {
  ActionType,
  receiveLeaderboardsActionCreator,
  asyncReceiveLeaderboards,
};
