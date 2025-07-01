import { Link } from "react-router-dom";

export const ResultPage = () => {
  return (
    <div className="quiz-container">
      <h1>퀴즈 결과</h1>
      <div className="results-section">
        <p>수고하셨습니다!</p>
        <div className="button-group">
          <Link to="/" className="link-btn">
            다시풀기
          </Link>
        </div>
      </div>
    </div>
  );
};
