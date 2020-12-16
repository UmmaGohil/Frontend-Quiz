import React, { useState } from 'react';
import Layout from '../template/layout';
import QandA from '../components/qanda';
import Data from '../data/data.json';

const Junior = () => {
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
          You scored {score} out of {Data.easy.length} 🎉
        </h1>
      ) : (
        <>
          <h3>
            Question {question + 1}/{Data.easy.length}
          </h3>
          <h3>{Data.easy[question].question}</h3>
          <div className='container'>
            {Data.easy[question].answers.map((answers) => (
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

export default Junior;
