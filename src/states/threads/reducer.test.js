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
import {
  fakeAddThreadResponse,
  fakeDownVoteThreadResponse,
  fakeThreadResponse,
  fakeUpVoteThreadResponse,
} from '../../utils/fakeResponse';

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
        threads: [fakeThreadResponse],
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the threads with the new thread when given by ADD_THREAD action', () => {
    // arrange
    const initialState = [fakeThreadResponse];

    const action = {
      type: 'ADD_THREAD',
      payload: {
        thread: fakeAddThreadResponse,
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([action.payload.threads, ...initialState]);
  });

  it('should return the threads with the new thread when given by UPVOTE_THREAD action', () => {
    // arrange
    const initialState = [fakeThreadResponse];

    const action = {
      type: 'UPVOTE_THREAD',
      payload: fakeUpVoteThreadResponse,
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
    const initialState = [fakeThreadResponse];

    const action = {
      type: 'DOWNVOTE_THREAD',
      payload: fakeDownVoteThreadResponse,
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
