import { FieldValues } from "react-hook-form";
import { InputProps } from "../FilterInput/types";

const FormInput = <T extends FieldValues>({
  placeholder,
  text,
  register,
  label,
  error,
  success,
}: InputProps<T>) => {
  return (
    <div className="relative">
      <div className="bg-light-bg-color px-3.5 py-3.5 rounded-md">
        <span className="text-lightSmall mr-2.5 tablet:text-small">{text}</span>
        <input
          className="bg-transparent outline-none text-lightSmall tablet:text-small text-primary-white placeholder:text-primary-white"
          placeholder={placeholder}
          {...register(label)}
        ></input>
      </div>
      {error && (
        <p className="absolute text-tiny text-red-error-color tablet:text-lightSmall">
          {error.message}
        </p>
      )}
      {success && (
        <p className="absolute text-tiny text-green-success-color tablet:text-lightSmall">
          Valid {label}
        </p>
      )}
    </div>
  );
};

export default FormInput;
