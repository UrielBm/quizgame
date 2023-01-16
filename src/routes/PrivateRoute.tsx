import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import QuizContext from "../context/QuizContext";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const AppContext = useContext(QuizContext);
  const location = useLocation();
  if (AppContext?.state.status !== "gameover") {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
