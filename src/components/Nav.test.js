import React from 'react';
import { MemoryRouter, Link, Router } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom/extend-expect';
import Nav from './Nav';

describe('<Nav />', () => {
  test('Links are correct in component', () => {
    //test Links are correct
    render(
      <Router>
        <Link to='/Easy'>
          <button className='nav-button'>Easy</button>
        </Link>
      </Router>
    );
    const history = createMemoryHistory();
    history.push = jest.fn();

    const { getByText } = render(
      <MemoryRouter history={history}>
        <Link to='/hello'>testing</Link>
      </MemoryRouter>
    );
    fireEvent.click(getByText('testing'));

    expect(history.push).toHaveBeenCalledWith('/hello');
  });
});
