import React from 'react';
import './qanda.css';

const QandA = () => {
  return (
    <>
      <h3>Q: An example question </h3>
      <div className='container'>
        <button className='answer-button'>Answer One</button>
        <button className='answer-button'>Answer Two</button>
        <button className='answer-button'>Answer Three</button>
        <button className='answer-button'>Answer Four</button>
      </div>
    </>
  );
};

export default QandA;
