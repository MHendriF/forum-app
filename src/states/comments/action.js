import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveThreadDetailActionCreator } from '../threadDetail/action';

const DOMAIN = {
  NAME: 'comment',
};

const EVENT = {
  ADD: 'add',
  UPVOTE: 'upvote',
  DOWNVOTE: 'downvote',
};

const ActionType = {
  ADD_COMMENT: `${DOMAIN.NAME}/${EVENT.ADD}`,
  UPVOTE_COMMENT: `${DOMAIN.NAME}/${EVENT.UPVOTE}`,
  DOWNVOTE_COMMENT: `${DOMAIN.NAME}/${EVENT.DOWNVOTE}`,
};

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

function upVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.UPVOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function downVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.DOWNVOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function asyncAddComment({ threadId, content }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { threadDetail } = getState();

    try {
      const comment = await api.createComment({ threadId, content });
      dispatch(addCommentActionCreator(comment));
      const newThreadDetail = await api.getDetailThread(threadDetail.id);
      dispatch(receiveThreadDetailActionCreator(newThreadDetail));
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncUpVoteComment(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, threadDetail } = getState();
    dispatch(upVoteCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await api.upVoteComment(commentId);
      const newThreadDetail = await api.getDetailThread(threadDetail.id);
      dispatch(receiveThreadDetailActionCreator(newThreadDetail));
    } catch (error) {
      alert(error.message);
      dispatch(upVoteCommentActionCreator({ commentId, userId: authUser.id }));
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncDownVoteComment(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, threadDetail } = getState();
    dispatch(downVoteCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await api.downVoteComment(commentId);
      const newThreadDetail = await api.getDetailThread(threadDetail.id);
      dispatch(receiveThreadDetailActionCreator(newThreadDetail));
    } catch (error) {
      alert(error.message);
      dispatch(
        downVoteCommentActionCreator({ commentId, userId: authUser.id }),
      );
    } finally {
      dispatch(hideLoading());
    }
  };
}

export {
  ActionType,
  addCommentActionCreator,
  upVoteCommentActionCreator,
  downVoteCommentActionCreator,
  asyncAddComment,
  asyncUpVoteComment,
  asyncDownVoteComment,
};
