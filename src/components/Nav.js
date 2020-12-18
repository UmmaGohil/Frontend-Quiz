import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='container'>
      <Link to='/Easy'>
        <button className='nav-button'>Easy</button>
      </Link>
      <Link to='/Mid'>
        <button className='nav-button'>Medium</button>
      </Link>
      <Link to='/Hard'>
        <button className='nav-button'>Hard</button>
      </Link>
    </div>
  );
};

export default Nav;
