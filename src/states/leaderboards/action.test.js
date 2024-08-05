/**
 * leaderboards Action Testing Scenario
 *
 * - asyncReceiveLeaderboards thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action correctly when data fetching failed
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import {
  receiveLeaderboardsActionCreator,
  asyncReceiveLeaderboards,
} from './action';
import {
  fakeErrorResponse,
  fakeLeaderboardsResponse,
} from '../../utils/fakeResponse';

describe('asyncReceiveLeaderboards thunk', () => {
  beforeEach(() => {
    api.originalGetLeaderboards = api.getLeaderboards;
  });

  afterEach(() => {
    api.getLeaderboards = api.originalGetLeaderboards;
    delete api.originalGetLeaderboards;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getLeaderboards = () => Promise.resolve(fakeLeaderboardsResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncReceiveLeaderboards()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderboardsActionCreator(fakeLeaderboardsResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getLeaderboards = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // mock alert if window is defined
    if (typeof window !== 'undefined') {
      window.alert = vi.fn();
    }

    // action
    await asyncReceiveLeaderboards()(dispatch);

    // assert
    if (typeof window !== 'undefined') {
      expect(dispatch).toHaveBeenCalledWith(showLoading());
      expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
      expect(dispatch).toHaveBeenCalledWith(hideLoading());
    }
  });
});
