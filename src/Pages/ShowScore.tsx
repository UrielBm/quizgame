import { useContext, useState } from "react";
import Title from "../components/Title/Title";
import QuizContext from "../context/QuizContext";
import useGetPharse from "../hooks/useGetPharse";
import Lottie from "lottie-react";
import { FormRegister } from "../components/Forms";
import "animate.css";
const ShowScore = () => {
  const AppContext = useContext(QuizContext);
  const [isOpen, setIsOpen] = useState(false);
  const { phrase, image } = useGetPharse(
    AppContext?.state.score,
    AppContext?.state.category
  );
  return (
    <section className="page">
      <Title title="Tu-score" />
      <div className="showScore">
        <div className="wrapperGeneral">
          <p className="phrase">{phrase}</p>
          {isOpen ? (
            <FormRegister />
          ) : (
            <div className="wrapperLottie">
              <Lottie animationData={image} loop={true} />
            </div>
          )}
          <div className="showScore__wrapperButtons">
            <button
              className="showScore__actionButton"
              onClick={() => AppContext?.handleResetGame()}
            >
              Volver a Jugar
            </button>
            <button
              className="showScore__actionButton"
              onClick={() => setIsOpen(!isOpen)}
            >
              Registrar puntaje
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowScore;
