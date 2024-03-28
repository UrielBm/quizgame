import { useContext, useState } from "react";
import QuizContext from "../../context/QuizContext";
import Modal from "../Modal/Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ModalInterface, valueRegisterForm } from "../../config/interfaces";
import { GamertagSchema, GamertagValue } from "../../config/ValidateFoms";
import clienteAxios from "../../config/axios";

const FormRegister = () => {
  const AppContext = useContext(QuizContext);
  const [modalStatus, setmodalStatus] = useState<ModalInterface>({
    isOpen: false,
    text: "",
    statusCode: null,
  });
  const handleDoRegister = async (
    gamertag: string = "",
    category: string = "",
    score: number = 0
  ) => {
    try {
      const { status } = await clienteAxios.post(`newscore`, {
        gamertag,
        category,
        score,
      });
      setmodalStatus({
        isOpen: true,
        text: "Felicidades por tu gran puntaje, prueba tu conocimiento en alguna otra categoria :D.",
        statusCode: status,
      });
    } catch (error: any) {
      setmodalStatus({
        isOpen: true,
        text: "upps..., al parecer no hay conexión, intentaremos registrarlo más tarde  :/",
        statusCode: 503,
      });
    }
  };
  const { isOpen, text, statusCode } = modalStatus;
  return (
    <>
      <Formik
        initialValues={GamertagValue}
        validationSchema={GamertagSchema}
        onSubmit={({ gamertag }: valueRegisterForm) => {
          handleDoRegister(
            gamertag,
            AppContext?.state.category,
            AppContext?.state.score
          );
        }}
      >
        <Form className="form">
          <div className="wrapperInput">
            <label htmlFor="gamertag">Ingresa tu nombre de jugador</label>
            <Field
              id="gamertag"
              name="gamertag"
              placeholder="tu gamertag"
              className="input"
            />
          </div>
          <p className="error">
            <ErrorMessage name="gamertag" />
          </p>
          <button type="submit" className="formButton">
            Registrar
          </button>
        </Form>
      </Formik>
      {isOpen && <Modal text={text} statusCode={statusCode} />}
    </>
  );
};

export default FormRegister;
