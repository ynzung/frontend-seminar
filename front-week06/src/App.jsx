import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import QuizApp from "./pages/QuizApp";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<QuizApp />} />
        <Route path="quiz/:quizId" element={<QuizApp />} />
        <Route path="result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
