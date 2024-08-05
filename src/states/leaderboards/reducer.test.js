/**
 * leaderboards Reducer Testing Scenario
 *
 * - should return the initial state when given by unknown action
 * - should return the leaderboards when given by RECEIVE_LEADERBOARDS action
 */

import { describe, it, expect } from 'vitest';
import leaderboardsReducer from './reducer';
import { ActionType } from './action';
import { fakeLeaderboardsResponse } from '../../utils/fakeResponse';

describe('leaderboardsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = leaderboardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the leaderboards when given by RECEIVE_LEADERBOARDS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_LEADERBOARDS,
      payload: {
        leaderboards: [fakeLeaderboardsResponse],
      },
    };

    // action
    const nextState = leaderboardsReducer(initialState, action);

    expect(nextState).toEqual(action.payload.leaderboards);
  });
});
