/**
 * @jest-environment jsdom
 */

/**
 * CommentForm Testing Scenario
 *
 * - should renders the comment form
 * - should comment typing correctly
 */

import { describe, it, expect, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import { MemoryRouter } from 'react-router-dom';
import CommentForm from './CommentForm';

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
    // Arrange
    render(<CommentForm addComment={() => {}} />, { wrapper: MemoryRouter });
    const commentInput = await screen.getByLabelText('Add a Comment');

    // Action
    await userEvent.type(commentInput, 'first comment');

    // Assert
    expect(commentInput).toHaveValue('first comment');
  });
});
