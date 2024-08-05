/**
 * authUser Reducer Testing Scenario
 *
 * - should return the initial state when given by unknown action
 * - should return the authUser when given by SET_AUTH_USER action
 * - should return null when given by UNSET_AUTH_USER action
 */

import { describe, expect, it } from 'vitest';
import authUserReducer from './reducer';
import { ActionType } from './action';
import { fakeAuthUserResponse } from '../../utils/fakeResponse';

describe('authUserReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = null;
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the authUser when given by SET_AUTH_USER action', () => {
    // arrange
    const initialState = null;
    const action = {
      type: ActionType.SET_AUTH_USER,
      payload: {
        authUser: fakeAuthUserResponse,
      },
    };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.authUser);
  });

  it('should return null when given by UNSET_AUTH_USER action', () => {
    // arrange
    const initialState = fakeAuthUserResponse;
    const action = { type: ActionType.UNSET_AUTH_USER };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(null);
  });
});
