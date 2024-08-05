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
import {
  fakeDetailThreadResponse,
  fakeDownVoteThreadResponse,
  fakeUpVoteThreadResponse,
} from '../../utils/fakeResponse';

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
        detailThread: fakeDetailThreadResponse,
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it('should return the thread detail with the new detail when given UPVOTE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = fakeDetailThreadResponse;
    const action = {
      type: ActionType.UPVOTE_THREAD_DETAIL,
      payload: fakeUpVoteThreadResponse,
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
    const initialState = fakeDetailThreadResponse;
    const action = {
      type: ActionType.DOWNVOTE_THREAD_DETAIL,
      payload: fakeDownVoteThreadResponse,
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
