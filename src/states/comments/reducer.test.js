/**
 * comments Reducer Testing Scenario
 *
 * - should return the initial state when given by unknown action
 * - should return the comments when given by RECEIVE_COMMENTS action
 * - should return the comments with the new comment when given by ADD_COMMENT action
 * - should return the comments with the new comment when given by UPVOTE_COMMENT action
 * - should return the comments with the new comment when given by DOWNVOTE_COMMENT action
 */

import { describe, it, expect } from 'vitest';
import commentsReducer from './reducer';
import { ActionType } from './action';
import {
  fakeAddCommentResponse,
  fakeCommentResponse,
  fakeDownVoteCommentResponse,
  fakeUpVoteCommentResponse,
} from '../../utils/fakeResponse';

describe('commentsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // Arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // Action
    const nextState = commentsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the comments when given by RECEIVE_COMMENTS action', () => {
    // Arrange
    const initialState = [];
    const action = {
      action: ActionType.RECEIVE_COMMENTS,
      payload: {
        comments: [fakeCommentResponse],
      },
    };

    // Action
    const nextState = commentsReducer(initialState, action);

    expect(nextState).toEqual(action.payload.comments);
  });

  it('should return the comments with the new comment when given by ADD_COMMENT action', () => {
    // Arrange
    const initialState = [fakeCommentResponse];
    const action = {
      type: ActionType.ADD_COMMENT,
      payload: {
        comment: fakeAddCommentResponse,
      },
    };

    // Action
    const nextState = commentsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual([action.payload.comment, ...initialState]);
  });

  it('should return the comments with the new comment when given by UPVOTE_COMMENT action', () => {
    // Arrange
    const initialState = [fakeCommentResponse];
    const action = {
      type: ActionType.UPVOTE_COMMENT,
      payload: fakeUpVoteCommentResponse,
    };

    // Action
    const nextState = commentsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
        downVotesBy: [],
      },
    ]);
  });

  it('should return the comments with the new comment when given by DOWNVOTE_COMMENT action', () => {
    // Arrange
    const initialState = [fakeCommentResponse];
    const action = {
      type: ActionType.DOWNVOTE_COMMENT,
      payload: fakeDownVoteCommentResponse,
    };

    // Action
    const nextState = commentsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });
});
