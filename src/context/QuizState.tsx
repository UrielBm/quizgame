import { Dispatch, SetStateAction, useReducer } from "react";
import QuizContext from "./QuizContext";
import QuizReducer from "./QuizReducer";
import { useNavigate } from "react-router-dom";
import { ADD_POINTS, GAME_OVER, GET_QUIZ, RESET_GAME } from "../config";
import {
  childrenProps,
  ModalInterface,
  myQuizState,
} from "../config/interfaces";
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
  const handleGetQuizByCategory = async (
    category: string,
    setmodalStatus: Dispatch<SetStateAction<ModalInterface>>
  ) => {
    try {
      const { data } = await clienteAxios.get(`getquiz/${category}`);
      data.length > 0
        ? dispatch({
            type: GET_QUIZ,
            payload: {
              category: category,
              data: data,
            },
          })
        : setmodalStatus({
            isOpen: true,
            text: "upps..., lo sentimos al parecer aun no hay preguntas para esta categoria :/, prueba más tarde",
            statusCode: 404,
          });
    } catch (error) {
      setmodalStatus({
        isOpen: true,
        text: "upps..., lo sentimos al parecer aun no hay preguntas para esta categoria :/, prueba más tarde",
        statusCode: 0,
      });
    }
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
