import { FC } from "react";

export type ButtonProps = {
  text: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ text, type, onClick }) => {
  return (
    <button
      className="whitespace-nowrap min-w-[120px] text-primary-white text-lightSmall tablet:text-medium bg-transparent rounded-lg border border-main-border-color px-7 py-3 hover:bg-primary-white hover:text-primary-black"
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
