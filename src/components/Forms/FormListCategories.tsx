import { useContext } from "react";
import QuizContext from "../../context/QuizContext";
import useGetCategories from "../../hooks/useGetCategories";
import Title from "../Title/Title";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { CategorySchema, CategoryValue } from "../../config/ValidateFoms";
import { category } from "../../config/interfaces";
import "animate.css";

const FormListCategories = () => {
  const AppContext = useContext(QuizContext);
  if (!AppContext) return null;
  const { handleGetQuizByCategory } = AppContext;
  const { list } = useGetCategories();
  return (
    <Formik
      initialValues={CategoryValue}
      validationSchema={CategorySchema}
      onSubmit={({ category }) => {
        handleGetQuizByCategory(category);
      }}
    >
      {({ values }) => (
        <Form className="animate__animated animate__zoomIn form">
          <Title title="Categorias" />
          <div role="group" className="wrapperCategories">
            {list.map(({ _id: id, name }: category) => (
              <label
                key={id}
                className={values.category === id ? "labelChecked" : "label"}
              >
                <Field type="radio" name="category" value={id} />
                {name}
              </label>
            ))}
          </div>
          <p className="error">
            <ErrorMessage name="category" />
          </p>
          <button type="submit" className="formButton">
            Jugar
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormListCategories;
