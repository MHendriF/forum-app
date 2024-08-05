/**
 * @jest-environment jsdom
 */

/**
 * LoginForm Testing Scenario
 *
 * - should renders the login form
 * - should handle email typing correctly
 * - should handle password typing correctly
 * - should call login function when login button is clicked
 */

import { describe, it, expect, vi, afterEach } from 'vitest';
import { screen, render, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import { MemoryRouter } from 'react-router-dom';
import LoginForm from './LoginForm';
import api from '../../utils/api';

expect.extend(matchers);

describe('LoginForm Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should renders the login form', () => {
    render(<LoginForm onLogin={() => {}} />, { wrapper: MemoryRouter });
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });

  it('should handle email typing correctly', async () => {
    // arrange
    render(<LoginForm onLogin={() => {}} />, { wrapper: MemoryRouter });
    const emailInput = await screen.getByLabelText('Email');

    // action
    await userEvent.type(emailInput, 'johndoe@mail.com');

    // assert
    expect(emailInput).toHaveValue('johndoe@mail.com');
  });

  it('should handle password typing correctly', async () => {
    // arrange
    render(<LoginForm onLogin={() => {}} />, { wrapper: MemoryRouter });
    const passwordInput = await screen.getByLabelText('Password');

    // action
    await userEvent.type(passwordInput, '123456');

    // assert
    expect(passwordInput).toHaveValue('123456');
  });

  it('should call login function when login button is clicked', async () => {
    // spy
    const spy = vi.spyOn(api, 'login');

    // arrange
    render(<LoginForm onLogin={api.login} />, { wrapper: MemoryRouter });
    const emailInput = await screen.getByLabelText('Email');
    const passwordInput = await screen.getByLabelText('Password');
    const loginButton = await screen.getByRole('button', { name: 'Login' });

    // action
    await userEvent.type(emailInput, 'johndoe@mail.com');
    await userEvent.type(passwordInput, '123456');
    await userEvent.click(loginButton);

    await waitFor(() => {
      expect(spy).toHaveBeenCalledWith({
        email: 'johndoe@mail.com',
        password: '123456',
      });
    });
  });
});
