/**
 * users Action Testing Scenario
 *
 * - asyncRegisterUser thunk
 *  - should dispatch action correctly when register is success
 */

import { describe, it, expect, beforeEach, afterEach, vitest } from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { registerUserActionCreator, asyncRegisterUser } from './action';
import { fakeUserResponse } from '../../utils/fakeResponse';

describe('asyncRegisterUser thunk', () => {
  beforeEach(() => {
    // backup original implementation
    api.originalRegister = api.register;
  });

  afterEach(() => {
    // restore original implementation
    api.register = api.originalRegister;

    // delete backup data
    delete api.originalRegister;
  });

  it('should dispatch action correctly when register is success', async () => {
    // Arrange
    vitest
      .spyOn(api, 'register')
      .mockReturnValue(Promise.resolve(fakeUserResponse));

    // mock dispatch
    const dispatch = vitest.fn();

    // Action
    await asyncRegisterUser({
      name: 'John Doe',
      email: 'john@example.com',
      password: '12345678',
    })(dispatch);

    // Assert
    await expect(api.register()).resolves.toBeTruthy();
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      registerUserActionCreator(fakeUserResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
