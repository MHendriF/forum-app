import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const DOMAIN = {
  NAME: 'thread',
};

const EVENT = {
  ADD: 'add',
  RECEIVE: 'receive',
  UPVOTE: 'upvote',
  DOWNVOTE: 'downvote',
};

const ActionType = {
  ADD_THREAD: `${DOMAIN.NAME}/${EVENT.ADD}`,
  RECEIVE_THREADS: `${DOMAIN.NAME}/${EVENT.RECEIVE}`,
  UPVOTE_THREAD: `${DOMAIN.NAME}/${EVENT.UPVOTE}`,
  DOWNVOTE_THREAD: `${DOMAIN.NAME}/${EVENT.DOWNVOTE}`,
};

function addThreadActionCreator(threads) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      threads,
    },
  };
}

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function upVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.UPVOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function downVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.DOWNVOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncAddThread({ title, body, category = 'all' }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const thread = await api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(thread));
      const newThreads = await api.getAllThreads();
      dispatch(receiveThreadsActionCreator(newThreads));
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncUpVoteThread(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(upVoteThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.upVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(upVoteThreadActionCreator({ threadId, userId: authUser.id }));
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncDownVoteThread(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(downVoteThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.downVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(downVoteThreadActionCreator({ threadId, userId: authUser.id }));
    } finally {
      dispatch(hideLoading());
    }
  };
}

export {
  ActionType,
  addThreadActionCreator,
  receiveThreadsActionCreator,
  upVoteThreadActionCreator,
  downVoteThreadActionCreator,
  asyncAddThread,
  asyncUpVoteThread,
  asyncDownVoteThread,
};
