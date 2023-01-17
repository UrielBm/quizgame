import Lottie from "lottie-react";
import ErrorLuttie from "./../../assets/lotties/error.json";
import WinnerLuttie from "./../../assets/lotties/winner.json";
import Logo from "./../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { myModalInterface } from "../../config/interfaces";

const Modal = ({ text, statusCode }: myModalInterface) => {
  const navigate = useNavigate();
  return (
    <div className="modal">
      <div className="modal__wrapper">
        <div className="modal__wrapperButton">
          <button className="modal__closeButton" onClick={() => navigate("/")}>
            X
          </button>
        </div>
        <img src={Logo} className="modalLogo" alt="logo" />
        <div>
          <p>{text}</p>
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
