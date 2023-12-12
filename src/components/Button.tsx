import { MouseEventHandler } from "react";

interface ButtonProps {
  btnText: string;
  btnClick?: MouseEventHandler<HTMLButtonElement>;
  btnClasses: string;
  isSubmit?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { btnText, btnClick, btnClasses, isSubmit = false } = props;

  return (
    <button
      className={`${btnClasses}`}
      onClick={btnClick}
      type={isSubmit ? "submit" : "button"}
    >
      {btnText}
    </button>
  );
};

export default Button;
