import { FC } from "react";

export type InputFilterProps = {
  placeholder: string;
  text: string;
  option?: string;
  setOption?: (params: string) => void;
  setPage?: React.Dispatch<React.SetStateAction<number>>;
};

const FilterInput: FC<InputFilterProps> = ({
  placeholder,
  text,
  setOption,
  setPage,
  option,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    setOption && setOption(e.target.value.trim());
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    setPage && setPage(1);
  };

  return (
    <div className="flex items-center bg-light-bg-color px-3.5 py-3.5 rounded-md h-[44px] tablet:h-[50px]">
      <span className="text-lightSmall mr-2.5 tablet:text-small">{text}</span>
      <input
        onChange={handleInputChange}
        className="bg-transparent outline-none text-lightSmall tablet:text-small text-primary-white placeholder:text-primary-white"
        placeholder={placeholder}
        value={option}
      ></input>
    </div>
  );
};

export default FilterInput;
