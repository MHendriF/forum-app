/**
 * threadDetail Action Testing Scenario
 *
 * - asyncReceiveThreadDetail thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action correctly when data fetching failed
 */

import { describe, it, expect, beforeEach, afterEach, vitest } from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import {
  receiveThreadDetailActionCreator,
  asyncReceiveThreadDetail,
} from './action';
import { fakeDetailThreadResponse } from '../../utils/fakeResponse';

describe('asyncReceiveThreadDetail thunk', () => {
  beforeEach(() => {
    // backup original implementation
    api.originalGetDetailThread = api.getDetailThread;
  });

  afterEach(() => {
    // restore original implementation
    api.getDetailThread = api.originalGetDetailThread;

    // delete backup data
    delete api.originalGetDetailThread;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // Arrange
    vitest
      .spyOn(api, 'getDetailThread')
      .mockReturnValue(Promise.resolve(fakeDetailThreadResponse));

    // mock dispatch
    const dispatch = vitest.fn();

    // Action
    await asyncReceiveThreadDetail('thread-1')(dispatch);

    // Assert
    await expect(api.getDetailThread()).resolves.toBeTruthy();
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadDetailActionCreator(fakeDetailThreadResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
