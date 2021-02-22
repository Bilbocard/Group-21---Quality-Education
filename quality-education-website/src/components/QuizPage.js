import React, { useState } from "react";
import "./QuizPage.css";

function QuizPage(props) {
  const [isBusy, setBusy] = useState(true);
  const [isStart, setStart] = useState(false);
  const [thisState, setThis] = useState({});
  let url =
    "http://localhost:8000/api/quizzes/get/" +
    window.location.href.split("/")[5];
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
  const handleStartClick = () => {
    setStart(true);
  };
  const handleTryAgainClick = () => {
    setStart(false);
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };
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
          {!isStart ? (
            <>
              <h1 className="quizTitle">{thisState.QuizName}</h1>
              <div
                className="app"
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="score-section">
                  This quiz has {thisState.Questions.length}{" "}
                  {thisState.Questions.length > 1 ? "questions" : "question"}
                </div>
                <button
                  className="start-button"
                  onClick={() => handleStartClick()}
                >
                  START
                </button>
              </div>
            </>
          ) : (
            <>
              <h1 className="quizTitle">{thisState.QuizName}</h1>

              {showScore ? (
                <div
                  className="app"
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div className="score-section">
                    You scored {score} out of {thisState.Questions.length}
                  </div>
                  <button
                    className="try-button"
                    onClick={() => handleTryAgainClick()}
                  >
                    TRY AGAIN
                  </button>
                </div>
              ) : (
                <div className="app">
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
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

export default QuizPage;
