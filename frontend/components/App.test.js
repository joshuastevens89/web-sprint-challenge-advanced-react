import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppFunctional from './AppFunctional';


// Write your tests here
test('sanity', () => {
  expect(true).toBe(true);
});

test('renders email input field', () => {
  render(<AppFunctional />);
  
  const emailInput = screen.getByPlaceholderText(/type email/i);
  
  expect(emailInput).toBeInTheDocument();
  
});

test('renders headings with initial text', () => {
  render(<AppFunctional />);

  expect(screen.getByText(/Coordinates/i)).toBeInTheDocument();

  expect(screen.getByText(/You moved 0 times/i)).toBeInTheDocument();

  
});

test('renders all buttons', () => {
  render(<AppFunctional />);

  expect(screen.getByText(/LEFT/i)).toBeInTheDocument();
  expect(screen.getByText(/UP/i)).toBeInTheDocument();
  expect(screen.getByText(/RIGHT/i)).toBeInTheDocument();
  expect(screen.getByText(/DOWN/i)).toBeInTheDocument();
  expect(screen.getByText(/reset/i)).toBeInTheDocument();
});

