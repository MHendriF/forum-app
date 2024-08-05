/**
 * users Reducer Testing Scenario
 *
 * - should return the initial state when given by unknown action
 * - should return the users when given by RECEIVE_USERS action
 */

import { describe, expect, it } from 'vitest';
import usersReducer from './reducer';
import { fakeUserResponse } from '../../utils/fakeResponse';

describe('usersReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = usersReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the users when given by RECEIVE_USERS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_USERS',
      payload: {
        users: [fakeUserResponse],
      },
    };

    // action
    const nextState = usersReducer(initialState, action);

    expect(nextState).toEqual(action.payload.users);
  });
});
