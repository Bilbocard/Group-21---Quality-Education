import React, { useState } from "react";
import "./Quiz.css";

function Quiz(props) {
  const [isBusy, setBusy] = useState(true);
  const [thisState, setThis] = useState({});
  let url = "http://localhost:8000/api/quizzes/get/1";
  React.useEffect(() => {
    let Matches = [];
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setThis(JSON.parse(JSON.stringify(json))[0].data);
        console.log(JSON.parse(JSON.stringify(json))[0].data);
        setBusy(false);
      })
      .catch((err) => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect == 1) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < thisState.Questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <>
      {isBusy ? (
        <div />
      ) : (
        <>
          <h1 className="quizTitle">{thisState.QuizName}</h1>
          <div className="app">
            {showScore ? (
              <div className="score-section">
                You scored {score} out of {thisState.Questions.length}
              </div>
            ) : (
              <>
                <div className="question-section">
                  <div className="question-count">
                    <span>Question {currentQuestion + 1}</span>/
                    {thisState.Questions.length}
                  </div>
                  <div className="question-text">
                    {thisState.Questions[currentQuestion].Question}
                  </div>
                </div>
                <div className="answer-section">
                  {thisState.Questions[currentQuestion].Answers.map(
                    (answerOption) => (
                      <button
                        className="button"
                        onClick={() =>
                          handleAnswerOptionClick(answerOption.IsCorrect)
                        }
                      >
                        {answerOption.Answer}
                      </button>
                    )
                  )}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Quiz;
