/**
 * isPreload Action Testing Scenario
 *
 * - asyncPreloadProcess thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action correctly when data fetching failed
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { setIsPreloadActionCreator, asyncPreloadProcess } from './action';
import { setAuthUserActionCreator } from '../authUser/action';
import {
  fakeAuthUserResponse,
  fakeErrorResponse,
} from '../../utils/fakeResponse';

describe('asyncPreloadProcess thunk', async () => {
  beforeEach(() => {
    api.originalGetOwnProfile = api.getOwnProfile;
  });

  afterEach(() => {
    api.getOwnProfile = api.originalGetOwnProfile;

    // delete backup data
    delete api.originalGetOwnProfile;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // Arrange
    // stub implementation
    api.getOwnProfile = () => Promise.resolve(fakeAuthUserResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // Action
    await asyncPreloadProcess()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      setAuthUserActionCreator(fakeAuthUserResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action correctly when data fetching failed', async () => {
    // Arrange
    // stub implementation
    api.getOwnProfile = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // Action
    await asyncPreloadProcess()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
  });
});
