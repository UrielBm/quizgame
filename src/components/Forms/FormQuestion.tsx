import { useContext, useState } from "react";
import Title from "../Title/Title";
import Timer from "../Timer/Timer";
import QuizContext from "../../context/QuizContext";
import { Formik, Field, Form } from "formik";
import { interfaceQuestion } from "../../config/interfaces";
import "animate.css";

const FormQuestion = () => {
  const AppContext = useContext(QuizContext);
  if (!AppContext) return null;
  const { state, handleAddPoints, handleGameOver } = AppContext;
  const [countDown, setCountDown] = useState<number>(10);
  const [styleForm, setstyleForm] = useState<string>(
    "animate__animated animate__bounceInLeft form"
  );

  const handleSetAnswer = (answer: string = "") => {
    let score = 0;
    if (answer === state.question.quiz.answer) score = 100;
    state.quiz.length - 1 > state.step
      ? handleAddPoints(score)
      : handleGameOver(score);
  };

  const handleDoSubmit = (answer: string = "") => {
    setstyleForm("animate__animated animate__fadeOutRight form");
    setTimeout(() => {
      handleSetAnswer(answer);
      setstyleForm("animate__animated animate__bounceInLeft form");
    }, 800);
    setCountDown(10);
  };
  const initialValues: interfaceQuestion = { answer: "" };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={({ answer }: interfaceQuestion) => {
        handleDoSubmit(answer);
      }}
    >
      {({ values }) => (
        <Form className={styleForm}>
          <Title title="Quiz" />
          <Timer
            countDown={countDown}
            DoAction={handleDoSubmit}
            setCountDown={setCountDown}
            resetCountDown={10}
          />
          <p className="question">{state.question.quiz.question}</p>
          <div role="group" className="wrapperCategories">
            {state.question.quiz.options.map((option, index) => (
              <label
                key={index}
                className={option === values.answer ? "labelChecked" : "label"}
              >
                <Field type="radio" name="answer" value={option} />
                {option}
              </label>
            ))}
          </div>
          <button type="submit" className="formButton">
            {state.quiz.length - 1 > state.step ? "Siguiente" : "Finalizar"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormQuestion;
