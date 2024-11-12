import { FC, useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "../../../components/FormInput/FormInput";
import { FormValues } from "./types";
import { schemaReg } from "../../../schemas/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { AppDispatch } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../../redux/auth/authOperations";
import { selectError, selectToken } from "../../../redux/auth/authSelectors";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const RegisterForm: FC = () => {
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const error = useSelector(selectError);
  const token = useSelector(selectToken);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (!isFirstRender) {
      if (token) {
        toast.success("User successfully signUp");
      }
      if (error) {
        toast.error(error as string);
      }
    }
  }, [error, token, isFirstRender]);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schemaReg),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setIsFirstRender(false);
    dispatch(
      signup({ name: data.name, email: data.email, password: data.password })
    );

    reset();
  };
  const isNameValid = !errors.name && getValues("name");
  const isEmailValid = !errors.email && getValues("email");
  const isPasswordValid = !errors.password && getValues("password");
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-3 tablet:gap-4 mb-5 tablet:mb-20">
        <FormInput
          success={isNameValid}
          error={errors.name}
          placeholder="Enter text"
          label="name"
          text="Name:"
          register={register}
        />
        <FormInput
          success={isEmailValid}
          error={errors.email}
          placeholder="Enter text"
          label="email"
          text="Mail:"
          register={register}
        />
        <FormInput
          success={isPasswordValid}
          error={errors.password}
          placeholder="Enter text"
          label="password"
          text="Password:"
          register={register}
        />
      </div>
      <div className="flex items-center gap-3.5 tablet:gap-5">
        <Button text="Registration" type="submit" />
        <Link
          to={"/login"}
          className="text-lightSmall tablet:text-small underline cursor-pointer hover:text-primary-white"
        >
          Already have an account ?
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
