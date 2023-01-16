import { Link } from "react-router-dom";
import Logo from "./../../assets/logo.svg";
const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} className="logo" alt="logo" width={96} height={96} />
      </Link>
      <nav className="nav">
        <Link to="/about" className="items">
          Nosotros
        </Link>
        <Link to="/scores" className="items">
          Puntajes
        </Link>
      </nav>
    </header>
  );
};

export default Header;
