/**
 * threadDetail Reducer Testing Scenario
 *
 * - should return the initial state when given by unknown action
 * - should return the thread detail when given by RECEIVE_THREAD_DETAIL action
 * - should return the thread detail with the new detail when given UPVOTE_THREAD_DETAIL action
 * - should return the thread detail with the new detail when given DOWNVOTE_THREAD_DETAIL action
 */

import { describe, it, expect } from 'vitest';
import threadDetailReducer from './reducer';
import { ActionType } from './action';

describe('threadsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the thread detail when given by RECEIVE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_THREAD_DETAIL,
      payload: {
        detailThread: {
          id: 'thread-1',
          title: 'Thread Pertama',
          body: 'Ini adalah thread pertama',
          category: 'General',
          createdAt: '2022-09-01T00:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
          comments: [
            {
              id: 'comment-1',
              content: 'Ini adalah komentar pertama',
              createdAt: '2022-09-01T00:00:00.000Z',
              owner: {
                id: 'users-1',
                name: 'John Doe',
                avatar: 'https://generated-image-url.jpg',
              },
              upVotesBy: [],
              downVotesBy: [],
            },
          ],
        },
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it('should return the thread detail with the new detail when given UPVOTE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2022-09-01T00:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2022-09-01T00:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: ActionType.UPVOTE_THREAD_DETAIL,
      payload: {
        userId: 'users-2',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: initialState.upVotesBy.includes(action.payload.userId)
        ? initialState.upVotesBy
        : initialState.upVotesBy.concat(action.payload.userId),
      downVotesBy: initialState.downVotesBy.includes(action.payload.userId)
        ? initialState.downVotesBy.filter((id) => id !== action.payload.userId)
        : initialState.downVotesBy,
    });
  });

  it('should return the thread detail with the new detail when given DOWNVOTE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2022-09-01T00:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah contoh comment',
          createdAt: '2022-09-01T00:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: ActionType.DOWNVOTE_THREAD_DETAIL,
      payload: {
        userId: 'users-2',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: initialState.upVotesBy.includes(action.payload.userId)
        ? initialState.upVotesBy.filter((id) => id !== action.payload.userId)
        : initialState.upVotesBy,
      downVotesBy: initialState.downVotesBy.includes(action.payload.userId)
        ? initialState.downVotesBy
        : initialState.downVotesBy.concat(action.payload.userId),
    });
  });
});
