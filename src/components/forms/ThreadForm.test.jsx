/**
 * @jest-environment jsdom
 */

/**
 * ThreadForm Testing Scenario
 *
 * - should renders the thread form
 * - should comment typing correctly
 */

import { describe, it, expect, vi, afterEach } from 'vitest';
import { screen, render, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import { MemoryRouter } from 'react-router-dom';
import ThreadForm from './ThreadForm';
import api from '../../utils/api';

expect.extend(matchers);

describe('ThreadForm Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should renders the comment form', () => {
    render(<ThreadForm addThread={() => {}} />, { wrapper: MemoryRouter });
    expect(screen.getByLabelText('Title')).toBeInTheDocument();
    expect(screen.getByLabelText('Category')).toBeInTheDocument();
    expect(screen.getByLabelText('Content')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Create New Thread' }),
    ).toBeInTheDocument();
  });

  it('should handle title typing correctly', async () => {
    // Arrange
    render(<ThreadForm addThread={() => {}} />, { wrapper: MemoryRouter });
    const titleInput = await screen.getByLabelText('Title');

    // Action
    await userEvent.type(titleInput, 'Title Test');

    // Assert
    expect(titleInput).toHaveValue('Title Test');
  });

  it('should handle category typing correctly', async () => {
    // Arrange
    render(<ThreadForm addThread={() => {}} />, { wrapper: MemoryRouter });
    const categoryInput = await screen.getByLabelText('Category');

    // Action
    await userEvent.type(categoryInput, 'general');

    // Assert
    expect(categoryInput).toHaveValue('general');
  });

  it('should handle content typing correctly', async () => {
    // Arrange
    render(<ThreadForm addThread={() => {}} />, { wrapper: MemoryRouter });
    const contentInput = await screen.getByLabelText('Content');

    // Action
    await userEvent.type(contentInput, 'lorem ipsum dolor sit amet');

    // Assert
    expect(contentInput).toHaveValue('lorem ipsum dolor sit amet');
  });

  it('should call createThread function when submit button is clicked', async () => {
    // Arrange
    const spy = vi.spyOn(api, 'createThread');
    render(<ThreadForm addThread={api.createThread} />, {
      wrapper: MemoryRouter,
    });
    const titleInput = await screen.getByLabelText('Title');
    const categoryInput = await screen.getByLabelText('Category');
    const contentInput = await screen.getByLabelText('Content');
    const submitButton = await screen.getByRole('button', {
      name: 'Create New Thread',
    });

    // Action
    await userEvent.type(titleInput, 'Title Test');
    await userEvent.type(categoryInput, 'general');
    await userEvent.type(contentInput, 'lorem ipsum dolor sit amet');
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(spy).toHaveBeenCalledWith({
        title: 'Title Test',
        body: 'lorem ipsum dolor sit amet',
        category: 'general',
      });
    });
  });
});
