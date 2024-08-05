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

describe('commentsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = commentsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the comments when given by RECEIVE_COMMENTS action', () => {
    // arrange
    const initialState = [];
    const action = {
      action: ActionType.RECEIVE_COMMENTS,
      payload: {
        comments: [
          {
            id: 1,
            content: 'Comment 1',
            createdAt: '2022-09-01T00:00:00.000Z',
            ownerId: 'users-1',
            upVotesBy: [],
            downVotesBy: [],
          },
          {
            id: 2,
            content: 'Comment 2',
            createdAt: '2018-01-02T00:00:00.000Z',
            ownerId: 'users-2',
            upVotesBy: [],
            downVotesBy: [],
          },
        ],
      },
    };

    // action
    const nextState = commentsReducer(initialState, action);

    expect(nextState).toEqual(action.payload.comments);
  });

  it('should return the comments with the new comment when given by ADD_COMMENT action', () => {
    // arrange
    const initialState = [
      {
        id: 1,
        content: 'Comment 1',
        createdAt: '2022-09-01T00:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
      },
      {
        id: 2,
        content: 'Comment 2',
        createdAt: '2018-01-02T00:00:00.000Z',
        ownerId: 'users-2',
        upVotesBy: [],
        downVotesBy: [],
      },
    ];
    const action = {
      type: ActionType.ADD_COMMENT,
      payload: {
        comment: {
          id: 3,
          content: 'Comment 3',
          createdAt: '2018-01-03T00:00:00.000Z',
          ownerId: 'users-3',
          upVotesBy: [],
          downVotesBy: [],
        },
      },
    };

    // action
    const nextState = commentsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([action.payload.comment, ...initialState]);
  });

  it('should return the comments with the new comment when given by UPVOTE_COMMENT action', () => {
    // arrange
    const initialState = [
      {
        id: 1,
        content: 'Comment 1',
        createdAt: '2022-09-01T00:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
      },
    ];
    const action = {
      type: ActionType.UPVOTE_COMMENT,
      payload: {
        commentId: 1,
        userId: 'users-1',
      },
    };

    // action
    const nextState = commentsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
        downVotesBy: [],
      },
    ]);
  });

  it('should return the comments with the new comment when given by DOWNVOTE_COMMENT action', () => {
    // arrange
    const initialState = [
      {
        id: 1,
        content: 'Comment 1',
        createdAt: '2022-09-01T00:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
      },
    ];
    const action = {
      type: ActionType.DOWNVOTE_COMMENT,
      payload: {
        commentId: 1,
        userId: 'users-1',
      },
    };

    // action
    const nextState = commentsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });
});
