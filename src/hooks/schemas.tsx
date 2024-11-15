import { useTranslation } from "react-i18next";
import * as yup from "yup";

export const useSchemaReg = () => {
  const { t } = useTranslation();

  return yup
    .object({
      name: yup
        .string()
        .min(2, t("name_error1"))
        .max(50, t("name_error2"))
        .required(t("name_required")),
      email: yup.string().email(t("mail_error")).required(t("mail_required")),
      password: yup
        .string()
        .min(7, t("password_error"))
        //   .matches(
        //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        //     "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        //   )
        .required(t("password_required")),
    })
    .required();
};

export const useSchemaLog = () => {
  const { t } = useTranslation();

  return yup
    .object({
      email: yup.string().email(t("mail_error")).required(t("mail_required")),
      password: yup
        .string()
        .min(7, t("password_error"))
        //   .matches(
        //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        //     "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        //   )
        .required(t("password_required")),
    })
    .required();
};

export const useSchemaAddBook = () => {
  const { t } = useTranslation();

  return yup
    .object({
      title: yup.string().required(t("title_error")),
      author: yup.string().required(t("author_error")),
      pages: yup
        .number()
        .typeError(t("pages_error"))
        .transform((value, originalValue) =>
          originalValue === null ? 0 : value
        )
        .required(t("pages_required")),
    })
    .required();
};

export const useSchemaReadingBook = () => {
  const { t } = useTranslation();

  return yup
    .object({
      pages: yup
        .number()
        .required(t("pages_required"))
        .typeError(t("pages_error")),
      //transform((value, originalValue) => (originalValue === null ? 0 : value))
    })
    .required();
};
