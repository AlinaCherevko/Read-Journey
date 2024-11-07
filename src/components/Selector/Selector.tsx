import { FC } from "react";
import Select from "react-select";
import { ISelect, Option } from "./types";
import { useSelectStyles } from "../../hooks/hooks";

const SelectEl: FC<ISelect> = ({ onChange }) => {
  const options = [
    { value: "all", label: "Show all" },
    { value: "unread", label: "Unread" },
    { value: "in-progress", label: "In progress" },
    { value: "done", label: "Done" },
  ];

  const onSelectChange = (newValue: unknown) => {
    if (newValue && typeof newValue === "object" && "value" in newValue) {
      const selectedOption = newValue as Option;

      if (selectedOption.value === "all") {
        onChange("");
      } else {
        onChange(selectedOption.value);
      }
    }
  };

  return (
    <div className="">
      <Select
        className=""
        //isClearable
        onChange={onSelectChange}
        name="type"
        options={options}
        placeholder="All books"
        styles={useSelectStyles()}
      />
    </div>
  );
};

export default SelectEl;
