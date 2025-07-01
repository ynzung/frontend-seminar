import { useRef, useState, useCallback } from "react";

export const useQuiz = (questions) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const inputRef = useRef(null);

  const handleSubmit = useCallback(() => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = userAnswer;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setUserAnswer("");
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [currentQuestion, userAnswer, answers, questions.length]);

  const handleReset = useCallback(() => {
    setCurrentQuestion(0);
    setUserAnswer("");
    setAnswers([]);
    inputRef.current.value = "";
    inputRef.current.focus();
  }, []);

  return {
    currentQuestion,
    userAnswer,
    setUserAnswer,
    answers,
    inputRef,
    handleSubmit,
    handleReset,
  };
};
