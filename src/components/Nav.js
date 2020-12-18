import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='container'>
      <Link to='/Junior'>
        <button className='nav-button'>Junior</button>
      </Link>
      <Link to='/Mid'>
        <button className='nav-button'>Mid</button>
      </Link>
      <Link to='/Expert'>
        <button className='nav-button'>Expert</button>
      </Link>
    </div>
  );
};

export default Nav;
