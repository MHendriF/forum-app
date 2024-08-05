/**
 * @jest-environment jsdom
 */

/**
 * RegisterForm Testing Scenario
 *
 * - should renders the register form
 * - should handle name typing correctly
 * - should handle email typing correctly
 * - should handle password typing correctly
 * - should call register function when register button is clicked
 */

import { describe, it, expect, vi, afterEach } from 'vitest';
import { screen, render, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import { MemoryRouter } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import api from '../../utils/api';

expect.extend(matchers);

describe('RegisterForm Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should renders the register form', () => {
    render(<RegisterForm onRegister={() => {}} />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Register' }),
    ).toBeInTheDocument();
  });

  it('should handle name typing correctly', async () => {
    // Arrange
    render(<RegisterForm onRegister={() => {}} />, { wrapper: MemoryRouter });
    const nameInput = await screen.getByLabelText('Name');

    // Action
    await userEvent.type(nameInput, 'John Doe');

    // Assert
    expect(nameInput).toHaveValue('John Doe');
  });

  it('should handle email typing correctly', async () => {
    // Arrange
    render(<RegisterForm onRegister={() => {}} />, { wrapper: MemoryRouter });
    const emailInput = await screen.getByLabelText('Email');

    // Action
    await userEvent.type(emailInput, 'johndoe@mail.com');

    // Assert
    expect(emailInput).toHaveValue('johndoe@mail.com');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<RegisterForm onRegister={() => {}} />, { wrapper: MemoryRouter });
    const passwordInput = await screen.getByLabelText('Password');

    // Action
    await userEvent.type(passwordInput, '123456');

    // Assert
    expect(passwordInput).toHaveValue('123456');
  });

  it('should call register function when register button is clicked', async () => {
    const spy = vi.spyOn(api, 'register');

    render(<RegisterForm onRegister={api.register} />, {
      wrapper: MemoryRouter,
    });
    const nameInput = await screen.getByLabelText('Name');
    const emailInput = await screen.getByLabelText('Email');
    const passwordInput = await screen.getByLabelText('Password');
    const registerButton = await screen.getByRole('button', {
      name: 'Register',
    });

    // Action
    await userEvent.type(nameInput, 'John Doe');
    await userEvent.type(emailInput, 'johndoe@mail.com');
    await userEvent.type(passwordInput, '123456');
    await userEvent.click(registerButton);

    await waitFor(() => {
      expect(spy).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'johndoe@mail.com',
        password: '123456',
      });
    });
  });
});
