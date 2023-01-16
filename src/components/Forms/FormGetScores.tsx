import { Formik, Field, Form, ErrorMessage } from "formik";
import { category, scores } from "../../config/interfaces";
import { CategorySchema, CategoryValue } from "../../config/ValidateFoms";
import useGetCategories from "../../hooks/useGetCategories";
import useGetScores from "../../hooks/useGetScores";
import Spinner from "../Spinner/Spinner";

const FormGetScores = () => {
  const { list } = useGetCategories();
  const { isLoading, list: listScore, handleGetTopScores } = useGetScores();
  return (
    <>
      <Formik
        initialValues={CategoryValue}
        validationSchema={CategorySchema}
        onSubmit={({ category }) => {
          handleGetTopScores(category);
        }}
      >
        <Form className="form">
          <div className="wrapperCategories">
            <Field
              component="select"
              id="category"
              name="category"
              className="select"
            >
              <option value="">--seleciona alguna categoria--</option>
              {list.map(({ _id: id, name }: category) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </Field>
          </div>
          <p className="error">
            <ErrorMessage name="category" />
          </p>
          <button type="submit" className="formButton">
            Buscar
          </button>
        </Form>
      </Formik>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="wrapperListScore">
          <h2>Top 5 mejores puntajes</h2>
          <ul className="list">
            {listScore.length > 0 ? (
              listScore.map(({ _id: id, gamertag, score }: scores) => (
                <li key={id} className="registerScore">
                  <span>{gamertag}</span>
                  <span className="score">{score} pts</span>
                </li>
              ))
            ) : (
              <li className="nofound">
                Aun no haces alguna busqueda o no hay ningun registro :/
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default FormGetScores;
