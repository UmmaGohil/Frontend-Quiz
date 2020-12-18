import React, { useState, useEffect } from 'react';
import Data from '../data/data.json';
import './qanda.css';
const QandA = (props) => {
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [dataJson, setDataJson] = useState(Data);

  useEffect(() => {
    setDataJson(Data);
  }, []);

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
    <>
      {showScore ? (
        <h1>
          You scored {score} out of {dataJson[props.level].length} 🎉
        </h1>
      ) : (
        <>
          <h3>
            Question {question + 1}/{dataJson[props.level].length}
          </h3>
          <h3>{dataJson[props.level][question].question}</h3>

          <div className='container'>
            {dataJson[props.level][question].answers.map((answers) => (
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
