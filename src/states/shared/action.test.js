/**
 * shared Action Testing Scenario
 *
 * - asyncPopulateUsersAndThreads thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action correctly when data fetching failed
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import asyncPopulateUsersAndThreads from './action';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';
import api from '../../utils/api';
import {
  fakeErrorResponse,
  fakeThreadResponse,
  fakeUserResponse,
} from '../../utils/fakeResponse';

describe('asyncPopulateUsersAndThreads thunk', () => {
  beforeEach(() => {
    // backup original implementation
    api.originalGetAllUsers = api.getAllUsers;
    api.originalGetAllThreads = api.getAllThreads;
  });

  afterEach(() => {
    // restore original implementation
    api.getAllThreads = api.originalGetAllThreads;
    api.getAllUsers = api.originalGetAllUsers;

    // delete backup data
    delete api.originalGetAllThreads;
    delete api.originalGetAllUsers;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getAllUsers = () => Promise.resolve([fakeUserResponse]);
    api.getAllThreads = () => Promise.resolve([fakeThreadResponse]);

    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncPopulateUsersAndThreads()(dispatch);

    // assert
    // dispatch is called with correct action
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadsActionCreator([fakeThreadResponse]),
    );
    expect(dispatch).toHaveBeenCalledWith(
      receiveUsersActionCreator([fakeUserResponse]),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getAllUsers = () => Promise.reject(fakeErrorResponse);
    api.getAllThreads = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // mock alert if window is defined
    if (typeof window !== 'undefined') {
      window.alert = vi.fn();
    }

    // action
    await asyncPopulateUsersAndThreads()(dispatch);

    // assert
    if (typeof window !== 'undefined') {
      expect(dispatch).toHaveBeenCalledWith(showLoading());
      expect(dispatch).toHaveBeenCalledWith(hideLoading());
      expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    }
  });
});
