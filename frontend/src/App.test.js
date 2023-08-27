import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders login form when not logged in', () => {
  render(<App />);
  const loginFormElement = screen.getByTestId('login-form');
  expect(loginFormElement).toBeInTheDocument();
});

test('renders tasks list when logged in', () => {
  render(<App />);
  const loginButton = screen.getByRole('button', { name: /sign in/i });
  fireEvent.click(loginButton);

  const tasksListElement = screen.getByTestId('tasks-list');
  expect(tasksListElement).toBeInTheDocument();
});

test('logs out when sign out button is clicked', () => {
  render(<App />);
  const loginButton = screen.getByRole('button', { name: /sign in/i });
  fireEvent.click(loginButton);

  const signOutButton = screen.getByRole('button', { name: /sign out/i });
  fireEvent.click(signOutButton);

  const loginFormElement = screen.getByTestId('login-form');
  expect(loginFormElement).toBeInTheDocument();
});
