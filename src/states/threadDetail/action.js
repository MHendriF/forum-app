import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const DOMAIN = {
  NAME: 'threadDetail',
};

const EVENT = {
  RECEIVE: 'receive',
  CLEAR: 'clear',
  UPVOTE: 'upvote',
  DOWNVOTE: 'downvote',
};

const ActionType = {
  RECEIVE_THREAD_DETAIL: `${DOMAIN.NAME}/${EVENT.RECEIVE}`,
  CLEAR_THREAD_DETAIL: `${DOMAIN.NAME}/${EVENT.CLEAR}`,
  UPVOTE_THREAD_DETAIL: `${DOMAIN.NAME}/${EVENT.UPVOTE}`,
  DOWNVOTE_THREAD_DETAIL: `${DOMAIN.NAME}/${EVENT.DOWNVOTE}`,
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function upVoteThreadDetailActionCreator({ threadId, userId }) {
  return {
    type: ActionType.UPVOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function downVoteThreadDetailActionCreator({ threadId, userId }) {
  return {
    type: ActionType.DOWNVOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(clearThreadDetailActionCreator());

    try {
      const threadDetail = await api.getDetailThread(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncUpVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(
      upVoteThreadDetailActionCreator({ threadId, userId: authUser.id }),
    );

    try {
      await api.upVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(
        upVoteThreadDetailActionCreator({ threadId, userId: authUser.id }),
      );
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncDownVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(
      downVoteThreadDetailActionCreator({ threadId, userId: authUser.id }),
    );

    try {
      await api.downVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(
        downVoteThreadDetailActionCreator({ threadId, userId: authUser.id }),
      );
    } finally {
      dispatch(hideLoading());
    }
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  upVoteThreadDetailActionCreator,
  downVoteThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
};
