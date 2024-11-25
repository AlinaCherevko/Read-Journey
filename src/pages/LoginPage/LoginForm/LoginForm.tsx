import { FC, useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import FormInput from "../../../components/FormInput/FormInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginValues } from "../../RegisterPage/RegisterForm/types";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { logIn } from "../../../redux/auth/authOperations";
import { selectError } from "../../../redux/auth/authSelectors";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useSchemaLog } from "../../../hooks/schemas";

const LoginForm: FC = () => {
  const { t } = useTranslation();
  const schemaLog = useSchemaLog();

  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const dispatch: AppDispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    if (error && !isFirstRender) {
      toast.error(error as string);
    }
  }, [error, isFirstRender]);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm<LoginValues>({
    resolver: yupResolver(schemaLog),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<LoginValues> = (data) => {
    dispatch(logIn({ email: data.email, password: data.password }));
    setIsFirstRender(false);
    reset();
  };

  const isEmailValid = !errors.email && getValues("email");
  const isPasswordValid = !errors.password && getValues("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4 tablet:gap-5 mb-18 tablet:mb-36.5">
        <FormInput
          success={isEmailValid}
          error={errors.email}
          placeholder={t("Enter text")}
          label="email"
          text={t("Mail")}
          register={register}
          describe={t("email")}
        />
        <FormInput
          success={isPasswordValid}
          error={errors.password}
          placeholder={t("Enter text")}
          label="password"
          text={t("Password")}
          register={register}
          describe={t("password")}
          type="password"
        />
      </div>
      <div className="flex items-center gap-3.5 tablet:gap-5">
        <Button text={t("Log in")} type="submit" />
        <Link
          to={"/register"}
          className="text-lightSmall tablet:text-small underline cursor-pointer hover:text-primary-white"
        >
          {t("Don't have an account")}
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
