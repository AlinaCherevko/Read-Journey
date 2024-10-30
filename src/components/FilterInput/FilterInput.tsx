import { FC } from "react";

export type InputFilterProps = {
  placeholder: string;
  text: string;
};

const Input: FC<InputFilterProps> = ({ placeholder, text }) => {
  return (
    <div className="bg-light-bg-color px-3.5 py-3.5 rounded-md">
      <span className="text-lightSmall mr-2.5 tablet:text-small">{text}</span>
      <input
        className="bg-transparent outline-none text-lightSmall tablet:text-small text-primary-white placeholder:text-primary-white"
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default Input;
