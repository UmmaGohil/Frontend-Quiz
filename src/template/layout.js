import React from 'react';
import Header from './header';
import Footer from './footer';

const layout = ({ children }) => {
  return (
    <div className='layout'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
