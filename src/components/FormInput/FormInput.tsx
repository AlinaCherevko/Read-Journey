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
  describe?: string;
  type?: string; // Optional prop to set input type (e.g., 'email', 'password'). Default is 'text' if not provided.  // Your implementation here.  // Your implementation here.  // Your implementation here.  // Your implementation here.  // Your implementation here.  // Your implementation here.  // Your implementation here.  // Your implementation here.  // Your implementation here.  // Your implementation here.  // Your implementation here.
};

const FormInput = <T extends FieldValues>({
  placeholder,
  text,
  register,
  label,
  error,
  success,
  describe,
  type,
}: InputProps<T>) => {
  const { t } = useTranslation();
  return (
    <div className="relative">
      <div className="w-full bg-light-bg-color px-3.5 py-3.5 rounded-md flex items-center h-[44px] tablet:h-[50px]">
        <span className="text-lightSmall mr-2.5 tablet:text-small">{text}</span>
        <input
          className="bg-transparent outline-none text-lightSmall tablet:text-small text-primary-white placeholder:text-primary-white flex-1"
          placeholder={placeholder}
          {...register(label)}
          type={type}
        />
      </div>
      {error && (
        <p className="absolute text-tiny text-red-error-color tablet:text-lightSmall">
          {error.message}
        </p>
      )}
      {success && (
        <p className="absolute text-tiny text-green-success-color tablet:text-lightSmall">
          {t("valid")} {describe}
        </p>
      )}
    </div>
  );
};

export default FormInput;
