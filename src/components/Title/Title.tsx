import { interfaceTitle } from "../../config/interfaces";

const Title = ({ title }: interfaceTitle) => {
  return (
    <h1 className="title">
      {[...title].map((letter, index) => (
        <p key={index} className="shake">
          {letter}
        </p>
      ))}
    </h1>
  );
};

export default Title;
