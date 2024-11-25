import { FC } from "react";
import Select from "react-select";
import { useSelectStyles } from "../../hooks/hooks";
import { useTranslation } from "react-i18next";

export type Option = { value: string; label: string };

export type ISelect = {
  onChange: (value: string) => void;
};

const SelectEl: FC<ISelect> = ({ onChange }) => {
  const { t } = useTranslation();
  const options = [
    { value: "all", label: t("Show all") },
    { value: "unread", label: t("Unread") },
    { value: "in-progress", label: t("Inprogress") },
    { value: "done", label: t("Done") },
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
        placeholder={t("All books")}
        styles={useSelectStyles()}
      />
    </div>
  );
};

export default SelectEl;
