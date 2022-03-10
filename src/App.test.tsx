import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders two panels in the dashboard ', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Top panel has a card for each medium', () => {

});

test('Overview panel has two cards for each medium', () => {

})

test('Mediums show in the same order in both panels', () => {

})

test('Dark mode choice is persisted to localStorage', () => {

})

test('Dark mode is shown according to localStorage', () => {

})

test('Date is correctly calculated', () => {

})

test('Hover changes card color', () => {

})



test('Number and period/% coloring', () => {

})

test('Icons match correct classes', () => {

})