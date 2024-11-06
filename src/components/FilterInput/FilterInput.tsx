import { FC, useState, useEffect } from "react";

export type InputFilterProps = {
  placeholder: string;
  text: string;
  setOption?: React.Dispatch<React.SetStateAction<string>>;
  setPage?: React.Dispatch<React.SetStateAction<number>>;
};

const Input: FC<InputFilterProps> = ({
  placeholder,
  text,
  setOption,
  setPage,
}) => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (setOption) setOption(value);
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("");
    setValue(e.target.value.trim());
    if (setPage) setPage(1);
  };

  return (
    <div className="bg-light-bg-color px-3.5 py-3.5 rounded-md">
      <span className="text-lightSmall mr-2.5 tablet:text-small">{text}</span>
      <input
        onChange={handleInputChange}
        className="bg-transparent outline-none text-lightSmall tablet:text-small text-primary-white placeholder:text-primary-white"
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default Input;
