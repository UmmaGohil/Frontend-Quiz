import React from 'react';
import { render, getByText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Component1 from './component1';

test('Renders the div', () => {
  render(<Component1 />);
  getByText('Hello World');
});
