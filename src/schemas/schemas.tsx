import * as yup from "yup";

export const schemaReg = yup
  .object({
    name: yup
      .string()
      .min(2, "Name must be at least 2 characters long")
      .max(50, "Name can't be longer than 50 characters")
      .required("Name is required"),

    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),

    password: yup
      .string()
      .min(7, "Password must be at least 7 characters long")
      //   .matches(
      //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      //     "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      //   )
      .required("Password is required"),
  })
  .required();

export const schemaLog = yup
  .object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),

    password: yup
      .string()
      .min(7, "Password must be at least 7 characters long")
      //   .matches(
      //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      //     "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      //   )
      .required("Password is required"),
  })
  .required();

export const schemaAddBook = yup
  .object({
    title: yup.string().required("Title is required"),
    author: yup.string().required("Author is required"),
    pages: yup.string().required("Pages are required"),
  })
  .required();
