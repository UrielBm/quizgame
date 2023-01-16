import { useEffect } from "react";
import { interfaceCountDown } from "../../config/interfaces";

const Timer = ({
  countDown,
  DoAction,
  setCountDown,
  resetCountDown = 10,
}: interfaceCountDown) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      updateTimer();
    }, 1000);
    return () => {
      clearTimeout(intervalId);
    };
  }, [countDown]);
  const updateTimer = () => {
    countDown > 0
      ? setCountDown(countDown - 1)
      : (DoAction(), setCountDown(resetCountDown));
  };
  return (
    <div className="timer">
      <p>
        Cuenta regresiva: <span>{`${countDown} s`}</span>
      </p>
    </div>
  );
};

export default Timer;
