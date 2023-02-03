import "./button.scss";

type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return (
    <div className="button">
      <button>{text}</button>
    </div>
  );
};

export default Button;
