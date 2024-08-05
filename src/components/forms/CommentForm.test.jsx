/**
 * @jest-environment jsdom
 */

/**
 * CommentForm Testing Scenario
 *
 * - should renders the comment form
 * - should comment typing correctly
 */

import { describe, it, expect, vi, afterEach } from 'vitest';
import { screen, render, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import { MemoryRouter } from 'react-router-dom';
import CommentForm from './CommentForm';
import api from '../../utils/api';

expect.extend(matchers);

describe('CommentForm Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should renders the comment form', () => {
    render(<CommentForm addComment={() => {}} />, { wrapper: MemoryRouter });
    expect(screen.getByLabelText('Add a Comment')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('should handle comment typing correctly', async () => {
    // arrange
    render(<CommentForm addComment={() => {}} />, { wrapper: MemoryRouter });
    const commentInput = await screen.getByLabelText('Add a Comment');

    // action
    await userEvent.type(commentInput, 'first comment');

    // assert
    expect(commentInput).toHaveValue('first comment');
  });

  //   it('should call addComment function when submit button is clicked', async () => {
  //     // spy
  //     const spy = vi.spyOn(api, 'createComment');

  //     // arrange
  //     render(<CommentForm addComment={() => {}} />, { wrapper: MemoryRouter });
  //     const commentInput = await screen.getByLabelText('Add a Comment');
  //     const submitButton = await screen.getByRole('button', { name: 'Submit' });

  //     // action
  //     await userEvent.type(commentInput, 'first comment');
  //     await userEvent.click(submitButton);

  //     // assert
  //     await waitFor(() => {
  //       expect(spy).toHaveBeenCalledWith({
  //         threadId: 'thread-1',
  //         content: 'first comment',
  //       });
  //     });
  //   });
});
