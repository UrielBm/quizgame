import { ADD_POINTS, GAME_OVER, GET_QUIZ, RESET_GAME } from "../config";

const QuizReducer = (state: any, action: any) => {
  switch (action.type) {
    case GET_QUIZ:
      return {
        ...state,
        status: "quiz",
        category: action.payload.category,
        quiz: action.payload.data,
        question: action.payload.data[0],
        score: 0,
      };
    case ADD_POINTS:
      return {
        ...state,
        question: { ...state.quiz[state.step + 1] },
        step: state.step + 1,
        score: state.score + action.payload,
      };
    case GAME_OVER:
      return {
        ...state,
        status: "gameover",
        quiz: [],
        question: null,
        step: 0,
        score: state.score + action.payload,
      };
    case RESET_GAME:
      return {
        ...state,
        status: "category",
        category: "",
        quiz: [],
        question: null,
        score: 0,
        step: 0,
      };
    default:
      return state;
  }
};

export default QuizReducer;
