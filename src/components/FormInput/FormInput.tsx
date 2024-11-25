import { useTranslation } from "react-i18next";
import {
  UseFormRegister,
  Path,
  FieldError,
  FieldValues,
} from "react-hook-form";

export type InputProps<T extends FieldValues> = {
  placeholder: string;
  text: string;
  label: Path<T>;
  register: UseFormRegister<T>;
  error: FieldError | undefined;
  success?: boolean | string | number;
  type?: string;
};

const FormInput = <T extends FieldValues>({
  placeholder,
  text,
  register,
  label,
  error,
  success,
  type,
}: InputProps<T>) => {
  const { t } = useTranslation();
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
          {t("valid")} {type}
        </p>
      )}
    </div>
  );
};

export default FormInput;
