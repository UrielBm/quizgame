import { createContext } from "react";
import { myContext } from "../config/interfaces";

const QuizContext = createContext<myContext | null>(null);

export default QuizContext;
