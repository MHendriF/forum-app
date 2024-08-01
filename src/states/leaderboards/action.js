import api from "../../utils/api";
import { hideLoading, showLoading } from "react-redux-loading-bar";

const ActionType = {
  RECEIVE_LEADERBOARDS: "RECEIVE_LEADERBOARD",
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
      if (typeof window !== "undefined") {
        window.alert(error.message);
      }
    }
    dispatch(hideLoading());
  };
}

export { ActionType, receiveLeaderboardsActionCreator, asyncReceiveLeaderboards };
