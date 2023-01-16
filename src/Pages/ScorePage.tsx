import { FormGetScores } from "../components/Forms";
import Title from "../components/Title/Title";

const ScorePage = () => {
  return (
    <section className="page">
      <div className="wrapperGeneral">
        <Title title="Categorias" />
        <p className="generalText">
          Selecciona una categoría para buscar los mejores 5 puntajes.
        </p>
        <FormGetScores />
      </div>
    </section>
  );
};

export default ScorePage;
