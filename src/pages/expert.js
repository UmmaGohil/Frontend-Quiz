import React, { useState } from 'react';
import Layout from '../template/layout';
import QandA from '../components/qanda';
import Data from '../data/data.json';

const Expert = () => {
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = question + 1;
    nextQuestion < Data.easy.length
      ? setQuestion(nextQuestion)
      : setShowScore(true);
  };
  return (
    <Layout>
      <QandA />
      {showScore ? (
        <h1>
          You scored {score} out of {Data.hard.length} 🎉
        </h1>
      ) : (
        <>
          <h3>
            Question {question + 1}/{Data.hard.length}
          </h3>
          <h3>{Data.hard[question].question}</h3>
          <div className='container'>
            {Data.hard[question].answers.map((answers) => (
              <button
                className='answer-button'
                onClick={() => handleClick(answers.correct)}
              >
                {answers.ans}
              </button>
            ))}
          </div>
        </>
      )}
    </Layout>
  );
};

export default Expert;
