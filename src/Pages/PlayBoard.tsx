import { useContext } from "react";
import { FormListCategories, FormQuestion } from "../components/Forms";
import QuizContext from "../context/QuizContext";

const PlayBoard = () => {
  const AppContext = useContext(QuizContext);
  return (
    <section className="page">
      {AppContext?.state.status === "category" ? (
        <FormListCategories />
      ) : (
        <FormQuestion />
      )}
    </section>
  );
};

export default PlayBoard;
