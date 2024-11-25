import { StylesConfig } from "react-select";
import { useMediaQuery } from "react-responsive";

export const useSelectStyles = (): StylesConfig => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return {
    placeholder: (provided) => ({
      ...provided,
      color: "#f9f9f9",
      fontWeight: "500",
      fontSize: isMobile ? "12px" : "14px",
      lineHeight: isMobile ? "18px" : "20px",
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: "#1F1F1F",
      border: "1px solid rgba(249, 249, 249, 0.2)",

      width: isMobile ? "120px" : "153px",
      height: isMobile ? "40px" : "40px",
      boxShadow: "none",
      borderRadius: "12px",
      "&:hover": {
        border: "1px solid #f9f9f9",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: isMobile ? "12px" : "14px",
      lineHeight: isMobile ? "18px" : "20px",
      fontWeight: "400",
      color: "#f9f9f9", // Колір обраного значення
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "rgba(249, 249, 249, 0.2)", // Колір стрілочки
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "10px",
      marginTop: "4px",
    }),
    menuList: (provided) => ({
      ...provided,
      padding: "0",
      borderRadius: "10px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: "#1F1F1F",
      color: state.isSelected ? "#f9f9f9" : "#686868",
      "&:hover": {
        color: "#f9f9f9",
      },
    }),
  };
};
