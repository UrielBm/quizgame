import Lottie from "lottie-react";
import ErrorLuttie from "./../../assets/lotties/error.json";
import WinnerLuttie from "./../../assets/lotties/winner.json";
import Logo from "./../../assets/logo.svg";
import { Link } from "react-router-dom";
import { myModalInterface } from "../../config/interfaces";

const Modal = ({ text, statusCode }: myModalInterface) => {
  return (
    <div className="modal">
      <div className="modal__wrapper">
        <div className="modal__wrapperButton">
          <Link className="modal__closeButton" to="/">
            X
          </Link>
        </div>
        <img src={Logo} className="modalLogo" alt="logo" />
        <div>
          <p>{text}</p>
          {statusCode === 200 && (
            <Link to="/scores" className="modal__scores">
              Puntajes
            </Link>
          )}
          <div className="modal__wrapperLottie">
            <Lottie
              animationData={statusCode === 200 ? WinnerLuttie : ErrorLuttie}
              loop={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
