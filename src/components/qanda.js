import React, { useState } from 'react';
import Data from '../data/data.json';

const QandA = (props) => {
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = question + 1;
    nextQuestion < Data[props.level].length
      ? setQuestion(nextQuestion)
      : setShowScore(true);
  };
  return (
    <>
      {showScore ? (
        <h1>
          You scored {score} out of {Data[props.level].length} 🎉
        </h1>
      ) : (
        <>
          <h3>
            Question {question + 1}/{Data[props.level].length}
          </h3>
          <h3>{Data[props.level][question].question}</h3>
          <div className='container questions'>
            {Data[props.level][question].answers.map((answers) => (
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
    </>
  );
};

export default QandA;
