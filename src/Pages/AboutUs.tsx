import Title from "../components/Title/Title";

const AboutUs = () => {
  return (
    <section className="page">
      <Title title="Nosotros" />
      <div className="wrapperAboutUs">
        <p>
          Acerca del proyecto de encuestados: este fue creado como proyecto
          final para probar, diferentes conceptos y tecnologias para el bootcamp
          de Código facilito Front-End.
        </p>
        <p>
          Consiste el proyecto de un juego tipo "Quiz" por categorias donde cada
          categoria contiene diferentes preguntas, mientras más aciertes mejor
          sera tu puntaje el cual puedes registrar y visualizar el top 5 mejores
          puntajes según la categoria.
        </p>
        <p>
          Pruebate a ti mismo y a tus amigos para conseguir el mejor puntaje.
        </p>
        <strong className="strong">¡HA JUGAR!</strong>
      </div>
    </section>
  );
};

export default AboutUs;
