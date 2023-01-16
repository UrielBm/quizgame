import Title from "../components/Title/Title";
import { useContext } from "react";
import QuizContext from "../context/QuizContext";
import "animate.css";
const Home = () => {
  const AppContext = useContext(QuizContext);
  return (
    <section className="page">
      <div className="animate__animated animate__backInDown hero">
        <Title title="Encuestados" />
        <div className="wrapperActionButton">
          <button
            onClick={() => AppContext?.handleResetGame()}
            className="animate__animated animate__flash animate__slow animate__delay-1s actionButton"
          >
            Jugar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
