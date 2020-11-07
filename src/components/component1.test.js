import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Component1 from './component1';

describe('<component1 />', () => {
  test('renders component and finds text', () => {
    render(<Component1 />);

    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
