import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Madrid", isCorrect: false },
        { answerText: "Berlin", isCorrect: false }
      ]
    },
    {
      questionText: "Who was the first president of the United States?",
      answerOptions: [
        { answerText: "George Washington", isCorrect: true },
        { answerText: "Thomas Jefferson", isCorrect: false },
        { answerText: "John Adams", isCorrect: false },
        { answerText: "Benjamin Franklin", isCorrect: false }
      ]
    },
    {
      questionText: "What is the largest country in the world by land area?",
      answerOptions: [
        { answerText: "China", isCorrect: false },
        { answerText: "Russia", isCorrect: true },
        { answerText: "Canada", isCorrect: false },
        { answerText: "United States", isCorrect: false }
      ]
    },
    {
      questionText: "Which of the following is not a primary color?",
      answerOptions: [
        { answerText: "Red", isCorrect: true },
        { answerText: "Blue", isCorrect: false },
        { answerText: "Green", isCorrect: false },
        { answerText: "Yellow", isCorrect: false }
      ]
    }
  ];

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
