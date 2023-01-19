import Title from "../components/Title/Title";

const AboutUs = () => {
  return (
    <section className="page">
      <Title title="Nosotros" />
      <div className="wrapperAboutUs">
        <p>
          Acerca del proyecto de encuestados: este fue creado como proyecto
          final para probar, diferentes conceptos y tecnologías para el bootcamp
          de Código facilito Front-End.
        </p>
        <p>
          Consiste el proyecto de un juego tipo "Quiz" por categorías donde cada
          categoría contiene diferentes preguntas, mientras más aciertes mejor
          será tu puntaje el cual puedes registrar y visualizar el top 5 mejores
          puntajes según la categoría.
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
