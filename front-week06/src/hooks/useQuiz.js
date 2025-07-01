import { useState, useCallback, useRef } from "react";

export const useQuiz = (questions) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const inputRef = useRef();

  const handleSubmit = useCallback(() => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = userAnswer;
    setAnswers(newAnswers);

    // ④-1. 다음 문제로 이동하면서 input에 포커스
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setUserAnswer("");
      setTimeout(() => inputRef.current?.focus(), 0); // (주석처리 풀면 OK)
    }
  }, [currentQuestion, userAnswer, answers, questions.length]);

  const handleReset = useCallback(() => {
    setCurrentQuestion(0);
    setUserAnswer("");
    setAnswers([]);
    inputRef.current.value = "";
    inputRef.current.focus();

    // ④-3. input에 포커스 하기
  }, []);

  return (
    currentQuestion,
    userAnswer,
    setUserAnswer,
    answers,
    inputRef,
    handleSubmit,
    handleReset
  );
};
