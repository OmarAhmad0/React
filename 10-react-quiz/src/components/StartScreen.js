import { useQuiz } from "../contexts/QuizContext";

export default function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();
  return (
    <div className="start">
      <h2>Welcom to The React Quiz!</h2>
      <h3>{numQuestions} question to test your react mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let us Start
      </button>
    </div>
  );
}
