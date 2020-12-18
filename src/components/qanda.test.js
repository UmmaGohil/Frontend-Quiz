import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QandA from './QandA';

describe('<component1 />', () => {
  test('renders component and finds text', () => {
    render(<QandA />);
    //test score update

    //test question state update
    expect(screen.getByText('Question')).toBeInTheDocument();
  });
});
