import { useReducer } from "react";
import QuizContext from "./QuizContext";
import QuizReducer from "./QuizReducer";
import { useNavigate } from "react-router-dom";
import { ADD_POINTS, GAME_OVER, GET_QUIZ, RESET_GAME } from "../config";
import { childrenProps, myQuizState } from "../config/interfaces";
import clienteAxios from "../config/axios";

const QuizState = (props: childrenProps) => {
  const navigate = useNavigate();
  const initialState: myQuizState = {
    status: "category",
    category: "",
    quiz: [],
    question: null,
    score: 0,
    step: 0,
  };
  const [state, dispatch] = useReducer(QuizReducer, initialState);
  const handleGetQuizByCategory = async (category: string) => {
    try {
      const { data } = await clienteAxios.get(`getquiz/${category}`);
      dispatch({
        type: GET_QUIZ,
        payload: {
          category: category,
          data: data,
        },
      });
    } catch (error) {}
  };
  const handleAddPoints = (score: number) => {
    dispatch({
      type: ADD_POINTS,
      payload: score,
    });
  };
  const handleGameOver = (score: number) => {
    dispatch({
      type: GAME_OVER,
      payload: score,
    });
    navigate("/show_score");
  };

  const handleResetGame = () => {
    dispatch({
      type: RESET_GAME,
    });
    navigate("/play");
  };
  return (
    <QuizContext.Provider
      value={{
        state,
        handleGetQuizByCategory,
        handleAddPoints,
        handleGameOver,
        handleResetGame,
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
};

export default QuizState;
