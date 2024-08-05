/**
 * threads Reducer Testing Scenario
 *
 * - should return the initial state when given by unknown action
 * - should return the threads when given by RECEIVE_THREADS action
 * - should return the threads with the new thread when given by ADD_THREAD action
 * - should return the threads with the new thread when given by UPVOTE_THREAD action
 * - should return the threads with the new thread when given by DOWNVOTE_THREAD action
 */

import { describe, it, expect } from 'vitest';
import threadsReducer from './reducer';

describe('threadsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_THREADS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            id: 1,
            title: 'Thread 1',
            body: 'Body 1',
            category: 'general',
            createdAt: '2022-09-01T00:00:00.000Z',
            ownerId: 'users-1',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
          {
            id: 2,
            title: 'Thread 2',
            body: 'Body 2',
            category: 'general',
            createdAt: '2018-01-02T00:00:00.000Z',
            ownerId: 'users-2',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
        ],
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the threads with the new thread when given by ADD_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 1,
        title: 'Thread 1',
        body: 'Body 1',
        category: 'Category 1',
        createdAt: '2022-09-01T00:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];

    const action = {
      type: 'ADD_THREAD',
      payload: {
        thread: {
          id: 2,
          title: 'Thread 2',
          body: 'Body 2',
          category: 'Category 2',
          createdAt: '2018-01-02T00:00:00.000Z',
          ownerId: 'users-2',
          upVotesBy: [],
          downVotesBy: [],
          totalComments: 0,
        },
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([action.payload.threads, ...initialState]);
  });

  it('should return the threads with the new thread when given by UPVOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 1,
        title: 'Thread 1',
        body: 'Body 1',
        category: 'Category 1',
        createdAt: '2022-09-01T00:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];

    const action = {
      type: 'UPVOTE_THREAD',
      payload: {
        threadId: 1,
        userId: 'users-2',
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('should return the threads with the new thread when given by DOWNVOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 1,
        title: 'Thread 1',
        body: 'Body 1',
        category: 'Category 1',
        createdAt: '2022-09-01T00:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];

    const action = {
      type: 'DOWNVOTE_THREAD',
      payload: {
        threadId: 1,
        userId: 'users-2',
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });
});
