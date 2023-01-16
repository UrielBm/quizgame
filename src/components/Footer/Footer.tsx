const Footer = () => {
  const handleGetYear = () => {
    const date = new Date();
    return date.getFullYear();
  };
  return (
    <footer className="footer">
      <p>
        Encuestados {handleGetYear()} <span className="copy">&#169;</span>,
        hecho por: Uriel Benítez Medina.
      </p>
    </footer>
  );
};

export default Footer;
