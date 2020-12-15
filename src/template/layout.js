import React from 'react';
import Header from '../components/template/header';
import Footer from '../components/template/footer';

const layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default layout;
