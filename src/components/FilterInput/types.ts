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
  success: boolean | string | number;
};
